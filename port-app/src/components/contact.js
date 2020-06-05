import React, { useState } from 'react';
import topbanner from '../pics/matrix-356024_1920.jpg'
import resume from './resume.pdf'
function Contact() {


  return (

<main class="flex flex-col items-center bg-gray-100">
    <div class="w-full" style={{backgroundImage: `url(${topbanner})`}}>
    <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
  
    </div>

        </div>
<a class= "text-blue-600 text-4xl mt-4" href ={resume} download = {resume}>Download Resume as a pdf</a>
<iframe class= "w-3/5 h-screen my-10"src= {resume}/>
{/* <div class ="flex flex-col items-center">
<br/>
<div dir="ltr" align="left">
    <table>
        <colgroup>
            <col/>
            <col width="237"/>
        </colgroup>
        <tbody>
            <tr>
                <td>
                    <p dir="ltr">
                        David Delfaus
                    </p>
                    <p dir="ltr">
                        Full-Stack Web Developer
                    </p>
                    <br/>
                </td>
                <td>
                    <p dir="ltr">
                        2600 East Kings Rd
                    </p>
                    <p dir="ltr">
                        Virginia Beach, VA 23452
                    </p>
                    <p dir="ltr">
                        757-752-4440
                    </p>
                    <p dir="ltr">
                        <a href="mailto:ddelfaus@gmail.com">
                            ddelfaus@gmail.com
                        </a>
                    </p>
                    <p dir="ltr">
                        <a href="https://portfolio-website-49wlxubwa.now.sh/">
                            Portfolio
                        </a>
                    </p>
                    <p dir="ltr">
                        <a href="https://github.com/ddelfaus">GitHub</a>
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 dir="ltr">
                        Projects
                    </h2>
                    <br/>
                    <p dir="ltr">
                        <a href="https://www.strongerfaster.fit/">
                            StrongerFaster
                        </a>
                        |
                        <a
                            href="https://github.com/Lambda-School-Labs/Workout-Builder-fe"
                        >
                            Front-End Github repo
                        </a>
                        |
                        <a
                            href="https://github.com/Lambda-School-Labs/Workout-Builder-be"
                        >
                            Back-End Github repo
                        </a>
                    </p>
                    <p dir="ltr">
                        A two month project for a workout scheduler app to
                        allow coaches to assign workouts to their clients.
                    </p>
                    <p dir="ltr">
                        React | Redux | Reach Router | Tailwind CSS | NodeJS |
                        Postgres | JestJS | PassportJS
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Assigned to the back-end but volunteered to
                                help finished the front_end do to timing
                                constraints
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Collaborated with seven other full-stack web
                                developers to plan, improve communication,
                                delegate tasks, and to pair-program
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Planned and developed the back-end database and
                                server with two other team members
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Tested back-end code using JestJS
                            </p>
                        </li>
                    </ul>
                    <br/>
                    <p dir="ltr">
                        <a
                            href="https://usemy-tech-stuff.ddelfaus.now.sh/signup"
                        >
                            UseMyTechStuff
                        </a>
                        |
                        <a href="https://github.com/BuildWeek-UseMy-Tech-Stuff">
                            Github repo
                        </a>
                    </p>
                    <p dir="ltr">
                        A one week project to allow users to rent out their
                        electronic devices.
                    </p>
                    <p dir="ltr">
                        React | Material | Redux | Yup | Styled Components |
                        Formik | Formik Material Fields
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Assigned as a React 2 developer to develop the
                                main functionality of the front-end web app
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Led two React 1 web developers to delegate task
                                and provide assistance to any troubles
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Planned and incorporated state management using
                                redux
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Collaborated with the back-end developer on
                                data needs
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Implemented basic CRUD operations with the data
                                access from the backend API
                            </p>
                        </li>
                    </ul>
                    <br/>
                    <p dir="ltr">
                        Work Experience
                    </p>
                    <br/>
                    <p dir="ltr">
                        Teen Aids Peer Corps ---- Accounting Intern
                    </p>
                    <h3 dir="ltr">
                        JANUARY 2014 - DECEMBER 2014
                    </h3>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Collaborated with team to plan and complete an
                                audit from the Combined Federal Campaign
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Organized with team to plan fundraising events
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Managed bookkeeping with QuickBooks Plus Online
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Prepared financial statements, such as balance
                                sheets and income statements
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Digitized paper documents and sorted
                                expenditure receipts
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Performed clerical duties
                            </p>
                        </li>
                    </ul>
                    <br/>
                </td>
                <td>
                    <p dir="ltr">
                        Skills
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Front End: HTML, CSS, React, Redux,
                                Testing-library/react, Jest, Responsive Design,
                                TailwindCss
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                BackEnd: Node, Express, Jest/SuperTest, SQL,
                                Sqlite3, PostgreSQL
                            </p>
                        </li>
                        <li dir="ltr">
                            <p dir="ltr">
                                Languages: JavaScript and Python
                            </p>
                        </li>
                        <li dir="ltr">
                            <br/>
                        </li>
                    </ul>
                    <h1 dir="ltr">
                        <br/>
                        Education
                    </h1>
                    <p dir="ltr">
                        Lambda School Sept 2019 to Current Full Stack Web
                        Developer Track
                    </p>
                    <br/>
                    <p dir="ltr">
                        Old Dominion University Norfolk,VA- December 2014 BSBA
                        : Finance and Accounting GPA : 3.14
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </td>
            </tr>
        </tbody>
    </table>
</div>


</div>  */}
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