import React, { useState } from 'react';

import resume from './Resume.pdf'
function Contact() {


  return (

<main class="flex flex-col items-center bg-gray-100">
 
<a class= "text-blue-700 text-4xl mt-4 underline" href ={resume} download = {resume}>Download Resume as a pdf</a>
<iframe class= "w-3/5 h-screen my-10"src= {resume}/>

</main> 
  )
  
}



export default Contact





{/* <main class="flex flex-col items-center bg-gray-100">
    <div class="w-full" style={{backgroundImage: `url(${topbanner})`}}>
    <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
  
  </div>
  <h1></h1>
</div>
</main>  */}