import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import Layout from "../../components/Layout";
export default function index() {
  return (
    <Layout>
      <div className="">hello</div>
      <Button variant="text" color="primary">
        click me
      </Button>
      <h2>about page</h2>
    </Layout>
  );
}
