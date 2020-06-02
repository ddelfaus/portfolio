import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Homepage from './components/homePage'
import Footer from './components/footer'
import Projects from './components/projects'

import {Router} from "@reach/router"

function App() {

 
  return (
    
<div className=  "flex flex-col h-screen bg-gray-100">
    
  <NavBar/>
    <Router>
      <Homepage path = "/"/>
     
     
      <Projects path = "/projects"/>
    </Router>
    <Footer/>
</div>
  

  /* //   <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
  //   <div className="ml-6 pt-1">
  //     <h1 className="text-2xl text-orange-400 leading-tight">
  //       Tailwind and Create React App
  //     </h1>
  //     <p className="text-base text-gray-700 leading-normal">
  //       Building apps together
  //     </p>
  //   </div>
  // </div> */
  );
}

export default App;



// "build:tailwind": "tailwindcss build src/tailwind.css -o src/tailwind.generated.css",
// "prestart": "yarn run build:tailwind",
// "prebuild": "yarn run build:tailwind",
// "start": "react-scripts start REACT_APP_test='testy'",
// "build": "react-scripts build",
// "test": "react-scripts test",
// "eject": "react-scripts eject"