import Profile from "./images/ravi.jpg"
export function About() {
  return (
  
      <div className='homepage'>
      <div className="about"> 
             <div className="about-split">
             <img className="about_image" src={Profile} alt="my profile"></img>
                  <div className="about_content">
                  <h3>hello i'm Ravi!</h3>
             <h2 className='paragraph'> A professional <span>Web</span> and <span>App</span> Developer</h2>
                        <p className="paragraph">I am a software developer entry level professional with 0+ years of Experience and interesting to learn web technology and Software Development.I am currently working in a <b>Quality Assurance</b>  <b>Quality Control  </b>LV SwitchGear. </p>
               
                          <a href="https://drive.google.com/file/d/1Ms433S77waAmQctQgBNlvW8G4nnz6538/view?usp=sharing">
                                <button className='button'>Download CV</button>
                          </a>
                          <a href="https://github.com/raviharish108">
                          <button className="spl_button">My works</button>
                          </a>
                        
                   </div> 
                 </div>     
              </div>
              </div>
  );
}
