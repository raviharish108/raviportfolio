import LinearProgress from '@mui/material/LinearProgress';



export function Skills() {
  return (
    <div>  
        <h1 className='h1'>skills</h1>
             <div className="skills">
                 <div>
                 {/* <img className="skill_image" src="https://www.ibm.com/blogs/jobs/wp-content/uploads/2022/06/final-Developer-Blog-Img1-Cropped.jpg" alt="Skillset"/> */}
                 </div>
                     
             <div className='skillprogress'>
     
                 <div  className='html'>
                 <h4>HTML 5</h4>
                 <LinearProgress variant="determinate" value={80} sx={{ color:"yellow" }}/>
                  </div>
      <div className='css'>
        <h4>CSS</h4>
        <LinearProgress variant="determinate" value={60} />
      </div>
      <div className='js'>
        <h4>JAVA SCRIPT</h4>
        <LinearProgress variant="determinate" value={60} />
      </div>
      <div className='react'>
        <h4>REACT JS</h4>
        <LinearProgress variant="determinate" value={70} />
      </div>
      <div className='mysql'> 
        <h4>MY SQL</h4>
        <LinearProgress variant="determinate" value={70} />
      </div>
      <div className='mongodb'>
        <h4>MANGO DB</h4>
        <LinearProgress variant="determinate" value={50} />
      </div>
      </div>
    </div>
    </div>
  );
}
