import React, { useEffect, useState } from "react";
import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'
import Grid from "../../components/grid/grid";

const apiEndpoint = 'https://inmo.cdn.prismic.io/api/v2';
const accessToken = '';

const Client = Prismic.client(apiEndpoint, { accessToken })

function Home() {
  const [doc, setDocData] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.at('document.type', 'property')
    )
    console.log('response', response)
    if (response) {
      setDocData(response.results[0])
    }
  }
  fetchData()
}, [])
return (
  <>
    {console.log('doc', doc)}
      <Grid />
    </>
  );
}

export default Home;
