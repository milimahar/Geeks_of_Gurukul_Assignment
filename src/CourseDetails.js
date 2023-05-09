import React from 'react'
import CourseStyle from './CourseStyle.css';


export const CourseDetails = () => {



  return (
    <div>
       
            




        <div className='main-page'>

            <div className='video-page'>
                <h1>Videoplayer</h1>
             
            </div>


            <div className='course-page'>
             <details>
                      <summary><h1>  Course Content </h1> </summary>
                  
                  
                    <details >
                                   <summary><h2>Milestone 0 : Welcome To Web Course</h2> </summary>
                             <details>
                                   <summary> Module -0    Wecome Module</summary>
                                 <label> Welcome to Complete Web Development Course :</label> 
                                   
                             </details>

                             <details>
                                   <summary> Module -1  Orientation. How to get ready for this course </summary>
                               
                                  <label>HTML</label><br/>
                                  <label>CSS</label><br/>
                                  <label>JAVASCRIPT</label><br/>
                                  <label>REACTJS</label><br/>
                                  <label>BOOSTRAP</label><br/>
                                  <label>MATERIALUI</label><br/>
                                  
                                 
                            </details>
                   </details>


                   <details>
                               <summary><h2>Milestone 1: Personal Portofolio</h2></summary>
                           <details>
                                 <summary>Module 1: Learn and Explore HTML as a Biginner</summary>
                                   <label>HTML Basic Introduction</label><br/>
                                   <label>HTML Tags</label><br/>
                                   <label>HTML Forms</label><br/>
                                   <label> HTML5 : New Fatures</label><br/>
                           </details>
                         <details>
                                 <summary>Module 2:Learn and Explore JAVASCRIPT as a Biginner  </summary>
                                 <label> JAVASCRIPT Basic Introduction</label><br/>
                                 <label>DOM Manipulation</label><br/>
                                 <label>ES6 Features</label><br/>
                        </details>
                 </details>

                  <details>
                                 <summary><h2>Milestone 2: Learn and Explore Javascript Library</h2></summary>
                            <details>
                                   <summary>Module 1: Learn and Explore Reactjs</summary>
                                 <label>ReactJs Basic Introduction</label><br/>
                                 <label>Reactjs Components</label><br/>
                                 <lable>React with Redux</lable><br/>
                             </details>
                             <details>
                                 <summary>Module 2: Learn and Explore Realtime Project </summary>
                                 <label>How to Design a project</label><br/>
                                 <label>What Components are used To Build a Project</label><br/>
                                 <label>Design a Responsive App</label><br/>
                               </details>
                 </details>
         </details>      
    </div>
            
            
            
</div>
 </div>
  )
}
