
import React from 'react';
import topbanner from '../pics/space5.jpg'
import pic  from '../pics/download.png'
function Homepage() {








return(

<main class="flex flex-col items-center bg-gray-100">
    <div class="w-full" style={{backgroundImage: `url(${topbanner})`}}>
  <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
    <div class=" m-0  p-0  text-5xl  text-white  antialiased  text-center">Hi, I am David Delfaus Welcome to my Portfolio</div>
   
 
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
        I am from Virginia Beach, Va and lived here all my life. I got  a Dual Major degree in Finance and Accounting at Old Dominion University. During my last year at the university I got an internship at a non for profit organization as an accountant. I did not enjoy the work because it was the same boring task everyday and I felt like I had made the wrong career choice. It did not feel like I was learning new things everyday or explaining my knowledge. My fallback plan was to find a career in programming because I was always interested in technology and computers. Once I learned about lambda school from my brother, I decided to try it out.
        </p>
        <p class = "bio mt-2">
        Lambda school seemed imitating and I did struggle to get through the program because I had no programming experience. I was able to complete the course and it was a great experience. I learned most of the tools to build full functioning web apps and the tools listed below. Lambda does a good job improving your social skills with requiring zoom meetings everyday with your groups.  When I am not on the computer, I like to go kayaking, skiing, going to the beach, and hanging with friends and family. 
 </p>
        </div>
        
    </section>

    <h1 class = "text-4xl mt-6 ">Skills</h1>


        
    
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