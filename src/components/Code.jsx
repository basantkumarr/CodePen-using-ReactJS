import React from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "./context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 65vh;
`;

function Code() {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor color="#ff3c41" icon="/" heading="HTML"  value={html} onChange={setHtml}></Editor>
      <Editor color="#0EBEFF" icon="*" heading="CSS" value={css} onChange={setCss}></Editor>
      <Editor color="yellow" icon="{}" heading="JavaScript" value={js} onChange={setJs}></Editor>
    </Container>
  );
}

export default Code;
