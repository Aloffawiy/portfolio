import {Typography, Link}  from'@mui/material/';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
return(
    
<div className="contact"  style={{backgroundColor:'#0c2461', minHeight: '100vh'}}  >
    <Typography variant='h2' style={{color:'white', paddingTop:'70px', paddingRight:'1150px'}}>Contact me!</Typography>

<div className="connects" style={{ marginTop:'400px'}}>

<div className="connect2"   style={{color:'white', fontSize: '75px', marginLeft:'90px'}} >
<Typography  style={{color:'#6ab04c',fontSize: '38px'}}><strong>Ajibade Fawas Muhammad</strong></Typography>
<Typography variant='h5'>fawazmusty247@gmail.com</Typography>
<Typography variant='h5'>+2347085812226</Typography>
</div>

<div className="connect1" style={{color:'white', paddingRight:'200px'}}>
<Typography style={{color:'#6ab04c', fontSize: '35px'}}> <strong> Connect with me</strong> </Typography><br />
<Link  href='https://www.linkedin.com/in/fawas-ajibade-80aa56255'><LinkedInIcon style={{fontSize: '60px'}}/> </Link> 
 <Link href='https://twitter.com/Aloffawiy'> <TwitterIcon style={{fontSize: '60px'}}/> </Link> 
  <Link href='https://github.com/Al-offawiy'> <GitHubIcon style={{fontSize: '60px'}}/> </Link>  
   </div>

</div>
 
</div>
   
)
}
export default Contact;