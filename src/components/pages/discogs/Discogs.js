import React, { Component } from "react";
import YouTube from "react-youtube";
import { connect } from "react-redux";
import _ from "lodash";
import { bindActionCreators } from "redux";
import {
  fetchCollectionNextPage,
  fetchUserCollection,
} from "../../../actions/collectionActions";
import ReleaseListItem from "./ReleaseListItem";

class Discogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      Artists: ["empty"],
      Styles: [],
      Genres: [],
      Videos: [],
      Count: "",
    };
    // this.getCollection = this.getCollection.bind(this);
    // this.loadRelease = this.loadRelease.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserCollection(50);
    // this.loadRelease();
    // // this.getCollection();
  }

  // loadRelease() {
  //   var Discogs = require("disconnect").Client;
  //   // var db = new Discogs("MyUserAgent/1.0").database();
  //   // db.getRelease(176126, (err, data) => {
  //   //   console.log(data);
  //   //   this.setState({
  //   //     Artists: [data.artists],
  //   //     Styles: [data.styles],
  //   //     Genres: [data.genres],
  //   //     Videos: [data.videos[0].uri.slice(32)],
  //   //   });
  //   // });
  //   var col = new Discogs({
  //     userToken: "zhoMtFDOpwphirLMGTgSnvyjczlewyTsopTapYJE",
  //   })
  //     .user()
  //     .collection();
  //   col.getReleases("CharmingUltra", 0, { page: 2, per_page: 75 }, function (
  //     err,
  //     data
  //   ) {
  //     console.log(data);
  //   });
  // }

  // getCollection() {
  //   const DISCOGS_URL = "https://api.discogs.com/";
  //   // let query = "users/charmingultra/collection/folders";
  //   // let query = "database/search?release_title=nevermind";
  //   let query = "releases/249504";
  //   // normally hidden from github in .env config file, but left public for demo use
  //   let apiToken = "zhoMtFDOpwphirLMGTgSnvyjczlewyTsopTapYJE";
  //   let requestUrl = `${DISCOGS_URL}${query}&token=${apiToken}`;

  //   fetch(requestUrl, {
  //     mode: "no-cors",
  //     headers: {
  //       "User-Agent": "Mcas4150",
  //     },
  //   })
  //     .then((res) => res.json())

  //     .then((data) => {
  //       this.setState({
  //         // Count: data.pagination.items,
  //         Artists: [data.artists],
  //         Styles: [data.styles],
  //         Genres: [data.genres],
  //         Videos: [data.videos[0].uri.slice(32)],
  //       });
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         Count: " ",
  //       });
  //     });
  // }

  render() {
    // const { releases } = this.props.collection;

    // if (_.isArray(releases) && !_.isEmpty(releases)) {
    //   return (
    //     <div className="mt-2 justify-content-center row">
    //       {releases.map((release) => {
    //         const data = release.basic_information;

    //         return (
    //           <div key={data.id} className="col-auto p-0">
    //             <ReleaseListItem data={data} />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    // }
    return null;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCollectionNextPage, fetchUserCollection },
    dispatch
  );
}

function mapStateToProps(state) {
  return { collection: state.collection };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discogs);
