import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailSharpIcon from '@mui/icons-material/MailSharp';
export function Contact() {
  return (
    <div>
    <div className="contact">
      <h1>contact details</h1>
    <div className="contact_container">
       <h4>gmail:<span>raviharish108@gmail.com</span></h4>
       <h4>github:<span>https://github.com/raviharish108</span></h4>
       <div className="contact_icon">
         <a  href="https//:www.google.com">
          <IconButton >
              <InstagramIcon className="iconbutton" sx={{ color:"white" }}/>
          </IconButton></a> 
          <a  href="https//:www.google.com">
          <IconButton>
              <FacebookIcon className="iconbutton" sx={{ color:"white" }}/>
          </IconButton></a> 
          <a  href="https//:www.google.com">
          <IconButton>
              <MailSharpIcon className="iconbutton" sx={{ color:"white" }}/>
          </IconButton></a> 
          
       </div>
    </div>
    </div>
    </div>
  );
}
