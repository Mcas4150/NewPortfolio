import * as THREE from "three";
import { TweenMax } from "gsap/TweenMax";
import React, { Component } from "react";
import prophec from "../imgs/prophetcplusplus.png";

const textureLoader = new THREE.TextureLoader();

class PlaneSubject {
  raycaster = new THREE.Raycaster();
  scene = null;

  constructor(scene) {
    const geometry = new THREE.PlaneBufferGeometry(5, 7);
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform sampler2D texture;
        uniform float imageAspectRatio;
        uniform float aspectRatio;
        uniform float opacity;
        uniform float hover;
        varying vec2 vUv;

        float exponentialInOut(float t) {
          return t == 0.0 || t == 1.0
            ? t
            : t < 0.5
              ? +0.5 * pow(2.0, (20.0 * t) - 10.0)
              : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;
        }

        void main() {
          vec2 uv = vUv;

          // fix aspectRatio
          float u = imageAspectRatio/aspectRatio;
          if(imageAspectRatio > aspectRatio) {
            u = 1. / u;
          }

          uv.y *= u;
          uv.y -= (u)/2.-.5;

          // hover effect
          float zoomLevel = .2;
          float hoverLevel = exponentialInOut(min(1., (distance(vec2(.5), uv) * hover) + hover));
          uv *= 1. - zoomLevel * hoverLevel;
          uv += zoomLevel / 2. * hoverLevel;
          uv = clamp(uv, 0., 1.);
          vec4 color = texture2D(texture, uv);
          if(hoverLevel > 0.) {
            hoverLevel = 1.-abs(hoverLevel-.5)*2.;

          }

          gl_FragColor = mix(vec4(1.,1.,1.,opacity), color, opacity);
        }
      `,
      uniforms: {
        texture: {
          type: "t",
          value: textureLoader.load(`${prophec}`)
          // value: textureLoader.load(
          //   "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          // )
        },
        imageAspectRatio: {
          type: "f",
          value: 1.0
        },
        aspectRatio: {
          type: "f",
          value: 1.0
        },
        opacity: {
          type: "f",
          value: 1.0
        },
        hover: {
          type: "f",
          value: 0.0
        }
      }
    });
    material.transparent = true;
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    this.scene = scene;
    this.mesh = mesh;
  }

  update(delta, time) {}

  mouseHandler(mouse, camera) {
    const { scene, mesh, raycaster } = this;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    TweenMax.to(mesh.material.uniforms.hover, 2, {
      value: intersects.length
    });

    TweenMax.to(mesh.scale, 0.5, {
      x: 1 - mouse.y * 0.1,
      y: 1 - mouse.y * 0.1
    });

    TweenMax.to(mesh.position, 0.5, {
      x: mouse.x
    });

    TweenMax.to(mesh.rotation, 0.5, {
      x: -mouse.y * (Math.PI / 3) * 0.3,
      y: mouse.x * (Math.PI / 3) * 0.3
    });
  }
}

/* Scene Manager ------------------------------------------------ */
class SceneManager {
  clock = new THREE.Clock();
  mouse = new THREE.Vector2();

  buildScene = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(217, 234, 211)");

    return scene;
  };

  buildRender = ({ width, height }) => {
    const { canvas } = this;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);

    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    return renderer;
  };

  buildCamera = ({ width, height }) => {
    const aspectRatio = width / height;
    const fieldOfView = 60;
    const nearPlane = 1;
    const farPlane = 100;
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );
    camera.position.z = 8;

    return camera;
  };

  createSceneSubjects = scene => {
    const sceneSubjects = [new PlaneSubject(scene)];

    return sceneSubjects;
  };

  constructor(canvas) {
    this.canvas = canvas;
    this.screenDimentions = {
      width: this.canvas.width,
      height: this.canvas.height
    };

    this.scene = this.buildScene();
    this.renderer = this.buildRender(this.screenDimentions);
    this.camera = this.buildCamera(this.screenDimentions);
    this.sceneSubjects = this.createSceneSubjects(this.scene);
  }

  update() {
    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    this.sceneSubjects.map(s => (s.update ? s.update(delta, elapsed) : null));

    this.renderer.render(this.scene, this.camera);
  }

  resizeHandler() {
    const { width, height } = this.canvas;

    this.screenDimentions = { width, height };

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  mouseHandler(mousePos) {
    Object.assign(this.mouse, mousePos);

    this.sceneSubjects.map(s =>
      s.mouseHandler ? s.mouseHandler(this.mouse, this.camera) : null
    );
  }
}

export default class Three extends Component {
  componentDidMount() {
    const canvas = document.getElementById("canvas");

    const sceneManager = new SceneManager(canvas);

    const resizeCanvas = () => {
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      sceneManager.resizeHandler();
    };

    const mouseHandler = e => {
      sceneManager.mouseHandler({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    const bindEvents = () => {
      window.onresize = resizeCanvas;
      resizeCanvas();

      window.onmousemove = mouseHandler;
    };

    const render = () => {
      window.requestAnimationFrame(render);
      sceneManager.update();
    };

    bindEvents();
    render();
  }

  render() {
    return <canvas id="canvas" />;
  }
}
