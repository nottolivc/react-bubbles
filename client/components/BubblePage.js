import React, { useState, useEffect } from "react"
import axios from "axios"
import Bubbles from "./Bubbles"
import ColorList from "./ColorList"
import {axiosWithAuth} from '../utils/axiosWithAuth.js'

const BubblePage = () => {

  const [colorList, setColors] = useState([])
 
  useEffect(() => {
    
    axiosWithAuth()
    .get(`/colors`)
    .then(result => {
      setColors(result.data)
    })
    .catch(error => console.log(error))
  })

  return (
    <>
      <ColorList colors={colorList} updateColors={setColors} />
      <Bubbles colors={colorList} />
    </>
  );
}

export default BubblePage
