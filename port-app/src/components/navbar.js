import React from 'react';
import { Link } from "@reach/router"

function NavBar() {





return(
    <nav class=" bg-blue-500 py-6 border-solid text-5xl " >
  

        <div class="flex justify-between max-w-screen-xl mx-auto ">
            {/* <a href="#responsive-header" class="block mt-4 lg:inline-block  lg:mt-0 text-teal-200 hover:text-white mr-64">
            Bio
            </a> */}

            <Link to ="/" class="block mt-4 lg:inline-block  lg:mt-0 text-teal-200 hover:text-white " >Bio</Link>
            
          
            {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-64">
            Projects
            </a> */}

            <Link to = "/projects" class="block  mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ">Projects</Link>

            {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
            // </a> */}

            <Link to ="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ">Contact</Link>
    
    
        
    </div>
</nav>
    )
}


export default NavBar



{/* <nav class="flex items-center justify-between flex-wrap bg-blue-500 py-6 " >
  
\
        <div class="">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Bio
            </a>
          
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Projects
            </a>
    
        
    </div>
</nav> */}




  {/* <div class="flex items-center flex-shrink-0 text-white  ">
    
      
    </div> */}

{/* <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mx-16">
<div class="text-sm lg:flex-grow">
    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
    Docs
    </a>
    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
     Examples
     </a>
    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
    Blog
    </a>
</div> */}




// content-center justify-center