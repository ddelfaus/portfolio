
import React from 'react';
import topbanner from '../pics/space5.jpg'
import pic  from '../pics/download.png'
function Homepage() {








return(

<main class="flex flex-col items-center bg-gray-100">
    <div class="w-full" style={{backgroundImage: `url(${topbanner})`}}>
  <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
    <div class=" m-0  p-0  text-5xl  text-white  antialiased  text-center">Hi I am David Delfaus, Full Stack Web Developer.</div>
   
 
  </div>
</div>

    <div class = "flex flex-col items-center text-4xl bg-gray-100 mt-8">
         
        <h1>About Me!</h1>
       
  
    </div>

    <section class = "p-10  py-10 lg:flex lg:flex-row lg:space-x-40 "> 
        <div class ="flex content-center justify-center relative">
        <img class= "object-cover mt-10" src={pic} alt="Picture of David Delfaus standing on a dock" /> 
        </div>
        <div class = "max-w-xl mt-10 ">
        <p class = "bio" >I am a hard-working web developer with proficiency in HTML, JavaScript, Python and CSS that is looking for a position in the web development field to expand knowledge and skills! 
      
    
        </p>
        
        <p class = "bio mt-2">
        I am from Virginia Beach, Va and have lived here all my life. I received a Dual Major degree in Finance and Accounting at Old Dominion University and have worked for non-for-profits as an accountant prior to programming. However, I was always interested in technology and computers and in September 2019 I enrolled in <a  class= "text-blue-700 underline" href="https://lambdaschool.com/">Lambda School</a> to further develop my skills in coding and programming. 
        </p>
        <p class = "bio mt-2">
        Lambda School was a fully immersive, highly intensive 9-month program where I completed hundreds of hours of code and built five fully functional web applications. I mastered my HTML, JavaScript, Python and CSS  skills as well as the <a  class= "text-blue-700 underline" href="#skills">skills listed below.</a> In addition to the technical skills, I also expanded my ability to build fully functional web applications on fully remote teams.
        </p>
        <p class = "bio mt-2">When I am not programming, I like to go kayaking, skiing, going to the beach, and hanging with friends and family.</p>
        </div>
        
    </section>

    <h1 class = "text-4xl mt-6 " id ="skills">Skills</h1>


        
    
    <div class=" sm:flex  p-8 ">
    <div class=" ml-auto mr-auto  sm:w-1/3 text-center  p-2 ">
      
        <h3 class="  text-2xl pb-2"> Programing Languages  </h3>
        <p class="  text-center mx-4"> JavaScript, Python
        </p>

    </div>
    <div class=" ml-auto mr-auto  sm:w-1/3 text-center  p-2">
 
        <h3 class=" text-2xl pb-2"> Front-End  </h3>
        <p class=" text-justify mx-4"> HTML, CSS, React, Redux, Testing-library/react, Jest, Responsive Design, TailwindsCSS
            
        </p>

    </div>
    <div class=" ml-auto mr-auto  sm:w-1/3 text-center p-2 ">
     
        <h3 class="text-2xl pb-2"> Back-End </h3>
        <p class="text-justify mx-4"> NodeJS, Express, Jest/SuperTest, SQL, Sqlite3, PostgreSQL
        </p>

    </div>
</div>


</main>	




)
}

export default Homepage