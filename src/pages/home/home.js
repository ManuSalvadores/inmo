import React, { useEffect, useState } from "react";
import { useStateContext } from '../../state';
import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'
import Grid from "../../components/grid/grid";
import Layout from "../../components/layout/layout";

const apiEndpoint = 'https://inmo.cdn.prismic.io/api/v2';
const accessToken = '';

const Client = Prismic.client(apiEndpoint, { accessToken })

function Home() {
  const [doc, setDocData] = useState(null);
  const [{ properties }, dispatch] = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'property')
      )
      if (response) {
        dispatch({ type: 'ADD', payload: response.results });
        setDocData(response.results[0])
      }
    }
    fetchData()
  }, []);

  useEffect(() => {
    console.log('properties', properties)
  }, [properties]);

  return (
    <Layout>
      <Grid />
    </Layout>
  );
}

export default Home;
