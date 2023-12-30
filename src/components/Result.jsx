import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { DataContext } from './context/DataProvider'
import {Box} from '@mui/material'


const Result = () => {

const[src,setSrc]=useState('');


    const{html,css,js}=useContext(DataContext);
    const srcCode=`
    <html>
        <body>
            ${html}
        </body>
    <style>
    ${css}
    </style>
    <script>
    ${js}
    </script>
    </html>
    `
useEffect(()=>{
 const timeOut = setTimeout(()=> {setSrc(srcCode);},2000)
 return()=>clearTimeout(timeOut);
},[html,css,js])

    
  return (
<Box>

<iframe 
srcDoc={srcCode}
title='Output'
sandbox='allow-scripts'
width="100%"
height="100%"

 ></iframe>



    </Box>
  )
}

export default Result;
