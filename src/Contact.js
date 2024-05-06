import {Typography, Link}  from'@mui/material/';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


const Contact = () => {
return(
    
<>
    
<div className="stage" style={{display:'flex'}}>
  <Typography style={{color:'#0c2461', fontSize:'60px', marginLeft:'17px'}}>Ọkín</Typography>
<figure class="ball"></figure>
</div>
    
    <Typography variant='h3'className='title-contact'>Contact me!</Typography>

    <div className="connect">
      <div style={{display:"flex"}}>
<Link  href='https://www.linkedin.com/in/fawas-ajibade-80aa56255'><LinkedInIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link> 
 <Link href='https://twitter.com/Aloffawiy'> <TwitterIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link> 
  <Link href='https://github.com/Al-offawiy'> <GitHubIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link>  
  <Link href="mailto:fawazmusty247@gmail.com" > <MailIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link></div>
<a style={{textDecoration:'none', color:'white'}} href="tel:+2347085812226"><Typography style={{fontSize:'26px'}}>07085812226</Typography></a>
</div>
 <Typography  style={{color:'#0c2461',fontSize: '25px', maxWidth:'500px', marginLeft:'10px'}}><strong>If you have a project in mind or you just want to converse
    feel free to contact me!</strong></Typography>
</>
   
)
}
export default Contact;