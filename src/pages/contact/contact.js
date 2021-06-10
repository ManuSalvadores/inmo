import React from "react";
import Layout from '../../components/layout/layout';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

function Contact() {
  return (
    <Layout>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </Layout>
  )
}

export default Contact;
