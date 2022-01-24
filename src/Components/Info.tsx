import React, { ReactElement } from 'react';

const Info:React.FC = ():ReactElement=> {
     return(
         <>
           <div className = "bg-white backdrop-blur-xl w-6/12 p-4 rounded-xl my-5">
            <h1 className = "font-bold text-center text-2xl">Made by Rahul Yadav</h1>
            <div className = "flex items-center flex-col justify-center">
                 <li className = "list-none text-xl bg-blue-700 text-white w-4/5 rounded text-center my-2">
                      <a href="https://github.com/itzrahulyadav/typescript-quizapp" >
                       See Code
                     </a>
                 </li>
                 <li className="list-none text-xl bg-blue-700 text-white w-4/5 rounded text-center my-2">
                    <a href= "https://www.instagram.com/itzrahulyadav/">
                       follow on instagram
                    </a>
                 </li>
                 <li className="list-none text-xl bg-blue-700 text-white w-4/5 rounded text-center my-2">
                    <a href= "https://twitter.com/Itzrahulyadav_">
                      follow on twitter
                   </a>
                 </li>
            </div>
           </div>
        </>
     )
}

export default Info