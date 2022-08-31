
import './App.css';
import {About} from './About';
import {Skills} from './Skills';
import {Projects} from './Projects';
import { Experience } from './Experience';
import { Contact } from './Contact';


function App(){
      // const[show,setshow]=useState();
      // const navigate=useNavigate();
      // const style1={
      //       display: show===true ? "block": "none"
      // }
      return(
           
            <div>
       {/* for heading */}
                     {/*for heading left  */}
                     <div  className='header'>
                               <div className='header__left'>
                                     <h1>develop<span className='name'>er</span></h1>
                               </div>
                      {/* for heading right 
                              <div className='header__right' >
                                      <button className="button" onClick={()=>navigate("/about")}><h4>Home</h4></button>
                                      <button className="button" onClick={()=>navigate("/skills")}><h4>Skills</h4></button>
                                      <button className="button" onClick={()=>navigate("/projects")}><h4>Projects</h4></button>
                                      <button className="button" onClick={()=>navigate("/exp")}><h4>Experience</h4></button>
                                      <button className="button" onClick={()=>navigate("/contact")}><h4>Contact</h4></button>
                                      <button className="spl_button" onClick={()=>navigate("/connect")}><h4>Connect With Me</h4></button>
                                </div>
                                <div className='menu'>
                                         <button className='button' onMouseEnter={()=>setshow(true)}
                                                                   onMouseLeave={()=>setshow(false)}>About</button>
                                         <div style={style1}>
                                              <div className='header_right1'>
                                                       <button className="button" onClick={()=>navigate("/about")}><h4>About</h4></button>
                                                       <button className="button" onClick={()=>navigate("/skills")}><h4>Skills</h4></button>
                                                       <button className="button" onClick={()=>navigate("/projects")}><h4>Projects</h4></button>
                                                         <button className="button" onClick={()=>navigate("/exp")}><h4>Experience</h4></button>
                                                       <button className="button" onClick={()=>navigate("/contact")}><h4>Contact</h4></button>
                                                             <button className="spl_button" onClick={()=>navigate("/connect")}><h4>Connect With Me</h4></button>
                                               </div>
                                                  
                                         </div>
                                </div> */}
                              
                     </div>
                      
                       <About/>
                       <Skills/>
                       <Projects/>
                       <Experience/>
                       <Connect/> 
                       <Contact/>
                       

             </div>
      )
}

function Connect(){
      return(
            <div className='form_container'>
                  <form action="https://formsubmit.co/raviharish108@gmail.com" method="POST">
                        <label>From</label>
                        <br/>
                        <input type="email" name="user_email" className='form_control' placeholder='email_id'/>
                         <br/>
                         <label>To</label>
                        <br/>
                        <input type="email" name="user_email" className='form_control' value="raviharish108@gmail.com"/>
                         <br/>
                         <label>Message</label>
                         <br/>
                         <textarea name="message" rows="4" className="form_control"/>
                         <br/>
                         <button>submit</button>
                  </form>
            </div>
      )
}
export default App;