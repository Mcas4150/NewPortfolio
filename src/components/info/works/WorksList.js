import React, { Component } from "react";
import Processing from "./animations/Processing";

export default class WorksList extends Component {
  render() {
    return (
      <div>
        {" "}
        <Processing></Processing>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bLV_YBqo4UM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}
