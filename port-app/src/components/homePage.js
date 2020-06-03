
import React from 'react';
import topbanner from '../pics/binary-2910663_1920.jpg'

function Homepage() {








return(

<main class="flex flex-col items-center">
    <div class="w-full" style={{backgroundImage: `url(${topbanner})`}}>
  <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
    <div class=" m-0  p-0  text-5xl  text-white  antialiased  text-center">Hi, I am David Delfaus Welcome to my Portfolio Site</div>
    <div class=" m-0  p-0  text-xl  text-white  antialiased  text-center"> I  am a hard-working web developer with proficiency in HTML, JavaScript, python and CSS looking for a position in the web development field to expand knowledge and skills!</div>
 
  </div>
</div>

    <div class = "flex flex-col items-center text-4xl bg-gray-100 my-10">
         
        <h1>About me!</h1>
       
  
    </div>

    <section class = "flex flex-row ">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L.png" alt="The Doge" width="500" height="600"/> 
        <div class = "max-w-xl ml-64">
        <p class = "">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, dolor eget iaculis semper, elit massa pellentesque dui, sed vestibulum nisl tortor vitae tellus. Morbi consequat facilisis tempor. Curabitur id feugiat lorem, cursus tempus eros. In hac habitasse platea dictumst. Nam aliquam tortor sit amet augue tempus pretium. Sed lacinia volutpat pretium. Proin eu magna consectetur, mattis est sed, dapibus nulla. Proin in feugiat erat, ac eleifend sapien. Phasellus tristique tellus at turpis ultrices, non mollis lorem gravida. Maecenas feugiat, libero at pretium bibendum, purus odio dictum ex, a congue est felis quis dolor. Donec egestas sem ut sollicitudin bibendum.</p>
        
        <p class = "">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, dolor eget iaculis semper, elit massa pellentesque dui, sed vestibulum nisl tortor vitae tellus. Morbi consequat facilisis tempor. Curabitur id feugiat lorem, cursus tempus eros. In hac habitasse platea dictumst. Nam aliquam tortor sit amet augue tempus pretium. Sed lacinia volutpat pretium. Proin eu magna consectetur, mattis est sed, dapibus nulla. Proin in feugiat erat, ac eleifend sapien. Phasellus tristique tellus at turpis ultrices, non mollis lorem gravida. Maecenas feugiat, libero at pretium bibendum, purus odio dictum ex, a congue est felis quis dolor. Donec egestas sem ut sollicitudin bibendum.</p>
        </div>
        
    </section>

    <h1 class = "text-4xl mt-6">Skills</h1>


        
    
    <div class=" sm:flex  p-8">
    <div class=" ml-auto mr-auto  sm:w-1/3 text-center  p-2 ">
      
        <h3 class="  text-2xl pb-2"> Programing Languages  </h3>
        <p class="  text-center mx-4"> JavaScript, Python
        </p>

    </div>
    <div class=" ml-auto mr-auto  sm:w-1/3 text-center  p-2">
 
        <h3 class=" text-2xl pb-2"> Front End  </h3>
        <p class=" text-justify mx-4"> HTML, CSS, React, Redux, Testing-library/react, Jest, Responsive Design, TailwindsCSS
            
        </p>

    </div>
    <div class=" ml-auto mr-auto  sm:w-1/3 text-center p-2">
     
        <h3 class="text-2xl pb-2"> Back End </h3>
        <p class="text-justify mx-4"> NodeJS, Express, Jest/SuperTest, SQL, Sqlite3, PostgreSQL
        </p>

    </div>
</div>


</main>	




)
}

export default Homepage