import React, { useEffect, useState } from 'react'
import logo from "../asset/image.png";
import "../App.css";
export default function Header() {
    const [theme,setTheme]=useState(JSON.parse(localStorage.getItem("theme"))|| "grid")

    useEffect(()=>{
         document.body.className = theme;
        localStorage.setItem("theme", JSON.stringify(theme));



    },[theme])
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo of todo" />
        <span>Todo </span>
      </div>
      <div className="theme">
        <span onClick={()=>setTheme("light")} className={theme=="light"?"light active":"light"}></span>
        <span onClick={()=>setTheme("dark")} className={theme=="dark"?"dark active":"dark"}></span>
        <span onClick={()=>setTheme("grid")} className={theme=="grid"?"grid active":"grid"}></span>
        
      </div>
      
    </div>
  )
}
