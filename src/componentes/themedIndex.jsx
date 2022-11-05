import React from "react";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import { useState } from "react";

export const ThemedIndex = () => {

 const initialTheme = "light";
 const initialLanguage = "en"

 const translations = {
  es:{
   tittle: "Título",
   headerLight: "Claro",
   headerDark: "Oscuro",
   headerFire: "Fuego",
   headerWater: "Agua",
   buttonLogin: "Iniciar sesión",
   buttonLogout: "Cerrar sesión",
   mainSubtittle1: "Tema 1",
   mainWelcome: "bienvenido usuari@",
   mainPar1: "Aquí va el contenido del tema 1",
   mainSubtittle2: "Tema 2",
   mainGreeting: "felicitaciones querido usuario, llegaste al segundo tema",
   mainPar2: "Aquí va el contenido del tema 2",
   footerText: "Practica tu codigo todos los días",  
  },
  en:{
   tittle: "Tittle",
   headerLight: "Light",
   headerDark: "Dark",
   headerFire: "Fire",
   headerWater: "Water",
   buttonLogin: "Login",
   buttonLogout: "Logout",
   mainSubtittle1: "Theme 1",
   mainWelcome: "welcome user",
   mainPar1: "here comes theme 1 content",
   mainSubtittle2: "theme 2",
   mainGreeting: "Greetings dear User, you have reached the second theme",
   mainPar2: "here comes theme 2 content",
   footerText: "Coding is an everyday thing",
  },
  por: {
   tittle: "Título",
   headerLight: "Claro",
   headerDark: "Escuro",
   headerFire: "Fogo",
   headerWater: "Água",
   buttonLogin: "Iniciar sessão",
   buttonLogout: "Fechar Sessão",
   mainSubtittle1: "Tópico 1",
   mainWelcome: "Bem vind@ usuári@",
   mainPar1: "Aqui está o conteúdo do tópico 1",
   mainSubtittle2: "Tópico 2",
   mainGreeting: "Parabéns car@ usuári@, você chegou ao segundo tópico",
   mainPar2: "Aqui está o conteúdo do tópico 2",
   footerText: "Pratique seu código todos os dias",
  }
 };

 const [ theme, setTheme ] = useState(initialTheme);
 const [ language, setLanguage ] = useState(initialLanguage);
 const [ texts, setTexts ] = useState(translations[language]);

 //console.log(texts);
 

 const handleTheme = (e) => {
 console.log(e.target.value)
 if (e.target.value === "light") {
  setTheme("light")
 }
 else if (e.target.value === "fire") {
  setTheme("fire")
 }
 else if (e.target.value === "water") {
  setTheme("water")
 }
 else {
  setTheme("dark")
 }
 };

 const handleLanguage = (e) => {
  console.log(e.target.value)
if (e.target.value === "es") {
 setLanguage("es")
 setTexts(translations.es)
}
else if (e.target.value === "en") {
 setLanguage("en")
 setTexts(translations.en)
}
else {
 setLanguage("por")
 setTexts(translations.por)
}
 }

return (

 <div className="PageContainer">
  <Header 
  theme={theme} 
  handleTheme={handleTheme} 
  texts={texts} 
  handleLanguage={handleLanguage}
  />
  <Main 
  theme={theme} 
  texts={texts}
  />
  <Footer 
  theme={theme} 
  texts={texts}
  />  
 </div>

)};