import React from "react";
import { Box,styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css';
import { useState } from "react";

const Heading = styled(Box)`

`
const Container=styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding:0 8px 8px;
`

const Header=styled(Box)`
display:flex;
background:#060606;
color:#AAAEBS;
justify-content:space-between;
font-weight:700;

`;
const Editor = ({heading,icon,color ,value,onChange}) => {

    const[open,setOpen]=useState(true);
  const handleChange=(editor,data,value)=>{
    onChange(value);
  }
 
    return (
    <Container style={open?null:{flexGrow:0}}>
        <Header>
      <Heading   style={{
            background: "#1d1e22",
            display:"flex",
            color:"white"
            }}>
        <Box
          component="span"
          style={{
            alignSelf:"center" ,

            background: color,
            height: 20,
            width: 20,
            display: "flex",
            placeContent: "center",
            borderRadius: 5,
            marginRight: 5,
            paddingBottom: 2,
          }}
        >
        {icon}
        </Box>
{heading}      </Heading>
      <CloseFullscreenIcon 
      onClick={()=>setOpen(prevState=> !prevState)}
      fontSize="small"
      style={{alignSelf:"center"}}
      />

      </Header>
    <ControlledEditor
    className="controlled-editor"
    value={value}
    onBeforeChange={handleChange}
    options={{
        theme:'material',
        lineNumbers:true
    }}
    ></ControlledEditor>
    </Container>
  );
};

export default Editor;
