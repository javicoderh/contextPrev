import React from "react";

export const Main = ({theme,texts}) => {
return (
<main className={theme}>
  <h2 className="">
   {texts.mainSubtittle1}
  </h2>
  <p>{texts.mainWelcome}</p>
  <p className="">
   {texts.mainPar1}
  </p>
  <hr></hr>
  <h2 className="">
  {texts.mainSubtittle2}
  </h2>
  <p>{texts.mainGreeting}</p>
  <p className="">
  {texts.mainPar2}
  </p>
  </main>
)};