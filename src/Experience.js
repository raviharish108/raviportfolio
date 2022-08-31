export function Experience() {
let my_exp=[{job:"QA&QC",years:"3",about:"LV SwitchGear Testing and Commissioning"},
           {job:"software developer",years:"0",about:"software development with 0+ years Experience"}];
  return (
    <div className="homepage">
    <div className="exp_container">
      <h1>Experience</h1>
      <div className="exp_container1">
      {my_exp.map((ex)=><Experience_sample  exp={ex}/>)}
      </div>
      
    </div>
    </div>
  );
}
 function Experience_sample({exp}){
  return(
    <div>
    <div className="experience">
       <h6>{exp.job}</h6>
       <p>{exp.years}</p>
    </div>
    <h4 className="exppp">{exp.about}</h4>
    </div>
  )
 }