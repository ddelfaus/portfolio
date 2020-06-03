import React from 'react';
import Project1 from '../pics/Untitled.png'
import test1 from '../pics/favicon.jpg'

function Projects() {








return(

    <content>
    <section>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
            <div class="bg-white lg:mx-2 lg:flex lg:max-w-6xl lg:shadow-lg lg:rounded-lg">
                <div class="lg:w-3/5 mt-5 pb-10 pl-5">
                    <div class="h-64 bg-cover lg:rounded-lg lg:h-full" >
                    <a href="https://www.strongerfaster.fit/"><img src={Project1} class= "object-cover" alt="Screen capture of StrongerFaster" width=""/></a>

                    </div>
                </div>
                <div class="ml-16  px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <a href="https://www.strongerfaster.fit/" class="text-3xl text-gray-800 font-bold">StrongerFaster <span class="text-indigo-600">- Backend</span></a>
                    <h3>Tech Stack:  React, Redux, Reach Router, Tailwind CSS, NodeJS, Postgres, JestJS, and PassportJS  </h3>
                    <p class="mt-4 text-gray-600">
                    A two month project for a workout scheduler app to allow coaches to assign workouts to their clients.
                   
                    </p>
                    <ul class ="list-disc ml-10">
                        <li>Assigned to work on the back-end but also assigned to the front-end due to timing constraints</li>
                        <li>Collaborated with 7 other full-stack web developers to plan, improve communication, delegate tasks, and to pair-program.</li>
                        <li>Planned and developed the back-end database and server with 2 other team members</li>
                    </ul>

                    
                    <div class="mt-10 pb-10 ml-5">
                        <a href="https://github.com/Lambda-School-Labs/Workout-Builder-fe" class="mt-10 bg-gray-900 text-gray-100 px-5 py-2 font-semibold rounded mr-5">Front-end Repo</a>
                        <a href="https://github.com/Lambda-School-Labs/Workout-Builder-be" class="bg-gray-900 text-gray-100 px-5 py-2 font-semibold rounded ">Back-end Repo</a>
                    </div>
                </div>
            </div>
        </div> 
    </section>
    <section>
        <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
            <div class="bg-white lg:mx-2 lg:flex lg:max-w-6xl lg:shadow-lg lg:rounded-lg">
                <div class="lg:w-3/5 mt-5 pb-10 pl-5">
                    <div class="h-64 bg-cover lg:rounded-lg lg:h-full" >
                    <a href="https://www.strongerfaster.fit/"><img src={Project1} class= "object-cover" alt="Screen capture of StrongerFaster" width=""/></a>

                    </div>
                </div>
                <div class="ml-16  px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <a href="https://www.strongerfaster.fit/" class="text-3xl text-gray-800 font-bold">StrongerFaster <span class="text-indigo-600">- Backend</span></a>
                    <h3>Tech Stack:  React, Redux, Reach Router, Tailwind CSS, NodeJS, Postgres, JestJS, and PassportJS  </h3>
                    <p class="mt-4 text-gray-600">
                    A two month project for a workout scheduler app to allow coaches to assign workouts to their clients.
                   
                    </p>
                    <ul class ="list-disc ml-10">
                        <li>Assigned to work on the back-end but also assigned to the front-end due to timing constraints</li>
                        <li>Collaborated with 7 other full-stack web developers to plan, improve communication, delegate tasks, and to pair-program.</li>
                        <li>Planned and developed the back-end database and server with 2 other team members</li>
                    </ul>

                    
                    <div class="mt-10 pb-10 ml-5">
                        <a href="https://github.com/Lambda-School-Labs/Workout-Builder-fe" class="mt-10 bg-gray-900 text-gray-100 px-5 py-2 font-semibold rounded mr-5">Front-end Repo</a>
                        <a href="https://github.com/Lambda-School-Labs/Workout-Builder-be" class="bg-gray-900 text-gray-100 px-5 py-2 font-semibold rounded ">Back-end Repo</a>
                    </div>
                </div>
            </div>
        </div> 
    </section>
    <div class="lg:flex lg:justify-center text-3xl mb-5">
        <h1>Check Out My Other Projects on</h1><a href="https://github.com/ddelfaus" class="no-underline hover:underline text-blue-500">&nbsp;Github</a>
    </div>
    </content>
)   
}

export default Projects