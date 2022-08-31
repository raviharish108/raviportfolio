import { useState } from "react";

export function Projects() {
  let my_projects=[{name:"shopping App",
                   description:"This Application purpose is for shopping. ",
                   img:"https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                   link:"https://stunning-sunflower-74cb9a.netlify.app/"},
                  {name:"SIM card App",
                   description:"This Application useful for the Attract the consumers to buy a new sim card. ",
                  img:"https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/05/next-movie-apps.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
                  link:"https://regal-macaron-226db8.netlify.app/"},
                 {name:"card Task",
                 description:"price card App",
                img:"https://cdn.vectorstock.com/i/1000x1000/19/43/sale-banners-and-price-tag-labels-selling-card-vector-16631943.webp" ,
                link:"https://zippy-mandazi-15dff7.netlify.app/"}]
                return (
                  <div className="homepage">
                        <div className="projectcontainer">
                          <h1>Projects</h1>
                          <p>Here are some projects which I done for making lives of people easy.</p>
                            <div className="projectcontainer_project">
                            {my_projects.map((project)=><Project_sample project={project}/>)}
                            </div>
                           </div>
                           </div>
                  );
                  }
  function Project_sample({project}){
    return(
           <div class="container">
             
               <img src={project.img} alt={project.name} class="image"/>
               <div className="overlay">
                   <div className="text">
                       <h4>{project.name}</h4>
                       <p>{project.description}</p>
                      <a href={project.link}>open</a>
                    </div>
                </div>
              </div>
     
    );
  }