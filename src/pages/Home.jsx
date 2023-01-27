import React from "react";
import BigRow from "../components/BigRow";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Trending" fetchURL={requests.requestTrending} />
      <BigRow title="Now Playing" fetchURL={requests.requestNowPlaying} />
      <Row rowID="2" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row rowID="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Action" fetchURL={requests.requestAction} />
      <Row rowID="8" title="Adventure" fetchURL={requests.requestAdventure} />
    </>
  );
};

export default Home;
