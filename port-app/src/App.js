import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './componets/navbar'
function App() {

  const tests = process.env.REACT_APP_test
  console.log(tests)
  console.log(process.env)
  return (
    
<div>

    <NavBar/>
    <p>feawfeaweaw{process.env.REACT_APP_test}</p>


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
