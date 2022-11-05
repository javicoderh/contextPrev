import React from "react";


export const Footer = ({theme,texts}) => {
return(
 <footer className={theme}>  
   <h5>
   {texts.footerText}
   </h5>
  </footer>
)};