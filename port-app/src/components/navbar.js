import React from 'react';
import { Link } from "@reach/router"

function NavBar() {





return(
    <nav class=" items-center justify-center bg-black py-6 text-5xl text-white   " >
  

        <div class=" flex flex-col lg:flex lg:flex-row lg:justify-between max-w-screen-xl lg:mx-auto ">
            {/* <a href="#responsive-header" class="block mt-4 lg:inline-block  lg:mt-0 text-teal-200 hover:text-white mr-64">
            Bio
            </a> */}

            <Link to ="/" class=" self-center  mt-4 lg:inline-block lg:mt-0 hover:text-teal-400 " >Bio</Link>
            
          
            {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-64">
            Projects
            </a> */}

            <Link to = "/projects" class="self-center mt-4 lg:inline-block lg:mt-0 hover:text-teal-400 ">Projects</Link>

            {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
            // </a> */}

            <Link to ="/contact" class="self-center mt-4 lg:inline-block lg:mt-0 hover:text-teal-400 ">Contact</Link>
    
    
        
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




// lg:flex lg:flex-row lg:justify-between max-w-screen-xl lg:mx-auto 