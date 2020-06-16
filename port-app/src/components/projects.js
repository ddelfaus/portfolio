import React from 'react';
import Project1 from '../pics/project1.png'
import Project2 from '../pics/rmt.png'
import Project3 from '../pics/chef.png'


function Projects() {








return(

    <content class="bg-gray-100" >
    {/* <div class="w-full" style={{backgroundImage: `url(${topbanner})`}}>
    <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
  
    </div> */}

        {/* </div> */}
    <section>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
            <div class="bg-white lg:mx-2 lg:flex lg:max-w-6xl lg:shadow-lg lg:rounded-lg">
                <div class="lg:w-3/5 mt-5 pb-10 pl-5">
                    <div class="relative lg:h-64 bg-cover lg:rounded-lg lg:h-full " >
                    <a href="https://www.strongerfaster.fit/"><img src={Project1} class= "object-cover" alt="Screen capture of StrongerFaster" width=""/></a>

                    </div>
                </div>
                <div class="ml-16 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <a href="https://www.strongerfaster.fit/" class="text-3xl text-blue-700 font-bold underline">StrongerFaster</a><span class="text-indigo-600 text-3xl font-bold">- Back-End</span>
                    <h3 class = "font-bold">React | Redux | Reach Router | Tailwind CSS | NodeJS | Postgres | JestJS | PassportJS  </h3>
                    <p class="mt-2 ">
                    A two month project for a workout scheduler app to allow coaches to assign workouts to their clients.
                   
                    </p>
                    <ul class ="list-disc ml-10 mt-2">
                        <li>Assigned to the back-end but volunteered to help finish the front-end do to timing constraints</li>
                        <li>Collaborated with seven other full-stack web developers to plan, improve communication, delegate tasks, and to pair-program</li>
                        <li>Planned and developed the back-end database and server with two other team members</li>
                        <li>Tested back-end code using JestJS</li>
                    </ul>

                    
                    <div class="mt-10 pb-10 ml-5">
                        <a href="https://github.com/Lambda-School-Labs/Workout-Builder-fe" class="mt-10 bg-gray-900 text-gray-100 px-5 py-2 font-semibold rounded mr-5">Front-End Repo</a>
                        <a href="https://github.com/Lambda-School-Labs/Workout-Builder-be" class="bg-gray-900 text-gray-100 px-5 py-2 font-semibold rounded ">Back-End Repo</a>
                    </div>
                </div>
            </div>
        </div> 
    </section>
    <section>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
            <div class="bg-white lg:mx-2 lg:flex lg:max-w-6xl lg:shadow-lg lg:rounded-lg">
                <div class="lg:w-3/5 mt-5 pb-10 pl-5">
                    <div class="relative lg:h-64 bg-cover lg:rounded-lg lg:h-full " >
                    <a href="https://usemy-tech-stuff.ddelfaus.now.sh/login"><img src={Project2} class= "object-cover" alt="Screen capture of StrongerFaster" width=""/></a>

                    </div>
                </div>
                <div class="ml-16 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <a href="https://usemy-tech-stuff.ddelfaus.now.sh/login" class="text-3xl text-blue-700 font-bold underline">UseMyTechStuff </a><span class="text-indigo-600 text-3xl font-bold">- Front-End</span>
                    <h3 class = "font-bold">React | Material | Redux | Yup | Styled Components | Formik | Formik Material Fields </h3>
                    <p class="mt-2 ">
                    A one week project to allow users to rent out their electronic devices.
                    </p>
                    <ul class ="list-disc ml-10 mt-2">
                        <li>As a React 2 developer, developed the main functionality of the front-end web application</li>
                        <li>Led two junior React web developers, delegating task and provide assistance to questions and blockers</li>
                        <li>Planned and incorporated state management using redux</li>
                        <li>Collaborated with the back-end developer on data needs</li>
                        <li>Implemented basic CRUD operations with the data access from the backend API</li>
                    </ul>

                    
                    <div class="mt-10 pb-10 ml-5">
                        <a href="https://github.com/BuildWeek-UseMy-Tech-Stuff" class="mt-10 bg-gray-900 text-gray-100 px-5 py-2 font-semibold rounded mr-5"> Project Repo</a>
                    </div>
                </div>
            </div>
        </div> 
    </section>
    <section>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
            <div class="bg-white lg:mx-2 lg:flex lg:max-w-6xl lg:shadow-lg lg:rounded-lg">
                <div class="lg:w-3/5 mt-5 pb-10 pl-5">
                    <div class="relative lg:h-64 bg-cover lg:rounded-lg lg:h-full " >
                    <a href="https://chefportfolio3.now.sh/"><img src={Project3} class= "object-cover" alt="Screen capture of StrongerFaster" width=""/></a>

                    </div>
                </div>
                <div class="ml-16 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <a href="https://chefportfolio3.now.sh/" class="text-3xl text-blue-700 font-bold underline">Chefportfolio </a><span class="text-indigo-600 text-3xl font-bold">- Back-End</span>
                    <h3 class = "font-bold"> NodeJS | SQL | JestJS | KnexJS </h3>
                    <p class="mt-2 ">
                    A one week group project to allow chefs to post their recipes. 
                    </p>
                    <ul class ="list-disc ml-10 mt-2">
                        <li>Assigned to the the back-end to plan and develop the back end server database</li>
                        <li>Developed data structure and migrated the database using knex</li>
                        <li>Tested back-end code using JestJS</li>
                        <li>Provided supported to the front-end team </li>
                        <li>Guided front-end team on redux setup</li>
                     
                    </ul>
                    <div class="mt-10 pb-10 ml-5">
                        <a href="https://github.com/bwft-chef-portfolio" class="mt-10 bg-gray-900 text-gray-100 px-5 py-2 font-semibold rounded mr-5">Project Repo</a>
                    </div>
                </div>
            </div>
        </div> 
    </section>
    <div class="bg-gray-100 py-10">
    <div class="flex justify-center text-3xl  ">
        <h1>Check out my other projects on&nbsp;</h1><a href="https://github.com/ddelfaus" class="underline text-blue-700 ">GitHub</a>
    </div>
    </div>
    </content>
)   
}

export default Projects