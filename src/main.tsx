import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  height: 100vh;
  width: 100vw;
}
#root{
  display: flex;
  height: 100%;
  width: 100%; 
}
.characters {
  padding: 16px;
  background-color: rgb(36, 40, 47);
}

.character-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  grid-gap: 16px;
  justify-items: center;
  align-items: center;
}
p{
  margin:0;
}
h2{
  margin:0;
}
ul {
  list-style-type: none;
}

.character-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  
  width: 600px;
  height: 220px;
  
  background-color: rgb(60, 62, 68);
  
  border-radius: 16px;
  
  overflow: hidden;
  
  &__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &__bio {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
  }
  
  &__text {
    color: white;
  }
  
  &__label {
    color: rgb(158, 158, 158);
    margin-bottom: 8px;
  }
  
  &__name {
    font-size: 2em;
    font-weight: bold;
  }
  
  &__location-name {
    font-size: 1.2em;
  }
  
  &__origin-location-name {
    font-size: 1.2em;
  }
}
`;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
