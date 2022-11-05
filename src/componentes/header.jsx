import React from "react";

export const Header = ({theme,handleTheme,texts, handleLanguage}) => {

 return (

  <header className={theme}>
   <h1>
    {texts.tittle}
   </h1>
   <select name="language" onChange={handleLanguage}>
   <option value="en">Language</option>
    <option value="es">Español</option>
    <option value="en">English</option>
    <option value="por">Português</option>
   </select>
   <br></br>
   <br></br>
   <input 
   type="radio" 
   name="theme" 
   id="light" 
   onClick={handleTheme} 
   value="light" 
   />
   <label htmlFor="light">{texts.headerLight}</label>
   <input 
   type="radio" 
   name="theme" 
   id="dark" 
   onClick={handleTheme} 
   value="dark" 
   />
   <label htmlFor="dark">{texts.headerDark}</label>
   <input 
   type="radio" 
   name="theme" 
   id="fire" 
   onClick={handleTheme} 
   value="fire" 
   />
   <label htmlFor="fire">{texts.headerFire}</label>
   <input 
   type="radio" 
   name="theme" 
   id="water" 
   onClick={handleTheme} 
   value="water" 
   />
   <label htmlFor="water">{texts.headerWater}</label>
   <br></br>
   <br></br>
   <button>{texts.buttonLogin}{texts.buttonLogout}</button>   
  </header>
  
 )};