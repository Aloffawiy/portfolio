import {Typography, Link}  from'@mui/material/';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
return(
    
<div className="contact"  >
    <Typography variant='h2' style={{color:'#0c2461',  paddingRight:'1000px', marginTop:'25px', marginLeft:'20px'}}>Contact me!</Typography>

<div className="connects" style={{ marginTop:'340px'}}>

<div className="connect2"   style={{color:'white', fontSize: '75px', marginLeft:'90px'}} >
<Typography  style={{color:'#0c2461',fontSize: '25px'}}><strong>Ajibade Fawas Muhammad</strong></Typography>
<Typography variant='h5'>fawazmusty247@gmail.com</Typography>
<Typography variant='h5'>+2347085812226</Typography>
</div>

<div className="connect1" style={{color:'white', paddingRight:'120px'}}>
<Typography style={{color:'#0c2461', fontSize: '35px'}}> <strong> Connect with me</strong> </Typography><br />
<Link  href='https://www.linkedin.com/in/fawas-ajibade-80aa56255'><LinkedInIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link> 
 <Link href='https://twitter.com/Aloffawiy'> <TwitterIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link> 
  <Link href='https://github.com/Al-offawiy'> <GitHubIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link>  
   </div>

</div>
 
</div>
   
)
}
export default Contact;