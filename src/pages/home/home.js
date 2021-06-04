import React, { useEffect } from "react";
import Grid from "../../components/grid/grid";
import axios from "axios";

function Home() {
  useEffect(() => {
    axios.get("https://inmo.cdn.prismic.io/api/v2").then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <>
      <Grid />
    </>
  );
}

export default Home;
