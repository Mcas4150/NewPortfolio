import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import ReleaseListItem from "./release_list_item";
import {
  fetchCollectionNextPage,
  fetchUserCollection,
} from "../../actions/collectionActions";
import SearchBar from "./search_bar";
import styled from "@emotion/styled";

const ReleasesList = () => {
  const [loading, setLoading] = useState(true);
  const collection = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserCollection(50));
    // window.addEventListener("scroll", this.onScroll, false);
  });

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.onScroll, false);
  // }

  // onScroll() {
  //   if (
  //     window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
  //     _.has(collection, "pagination")
  //   ) {
  //     const { pagination } = collection;

  //     if (_.has(pagination.urls, "next") && !loading) {
  //       dispatch(fetchCollectionNextPage(pagination.urls.next)).then(() => {
  //        setLoading(false);
  //       });
  //       setLoading(true);
  //     }
  //   }
  // }

  const { releases } = collection;

  if (_.isArray(releases) && !_.isEmpty(releases)) {
    return (
      <div>
        <SearchBar />
        <ReleasesContainer>
          {releases.map((release) => {
            const data = release.basic_information;

            return (
              <div key={data.id} className="col-auto p-0">
                <ReleaseListItem data={data} />
              </div>
            );
          })}
        </ReleasesContainer>
      </div>
    );
  }

  return null;
};

const ReleasesContainer = styled.div`
  justify-content: center;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  // overflow: scroll;
  height: 100%;
}
`;

export default ReleasesList;
