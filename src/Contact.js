import {Typography, Link}  from'@mui/material/';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
return(
    
<>
    
<div className="stage" style={{display:'flex'}}>
  <Typography style={{color:'#0c2461', fontSize:'60px', marginLeft:'17px'}}>Al</Typography>
  <Typography style={{color:'white', fontSize:'60px', }}>o</Typography>
<figure class="ball"></figure>
<Typography  style={{color:'#0c2461', fontSize:'60px', marginLeft:'2px', fontStyle:'oblique'}}>ffawiy</Typography> 
</div>
    
    <Typography variant='h3'className='title-contact'>Contact me!</Typography>

<div className="connects" style={{ marginTop:'200px'}}>

<div className="connect2" >
<Typography  style={{color:'#0c2461',fontSize: '25px', maxWidth:'500px'}}><strong>If you have a project in mind or you just want to converse
    feel free to contact me</strong></Typography>
<a href="mailto:fawazmusty247@gmail.com"  style={{textDecoration:'none', color:'white'}} ><Typography variant='h5'>fawazmusty247@gmail.com</Typography></a>

<a style={{textDecoration:'none', color:'white'}} href="tel:+2347085812226"><Typography variant='h5'>07085812226</Typography></a>

</div>

<div  style={{color:'white', paddingRight:'120px'}}>

<Link  href='https://www.linkedin.com/in/fawas-ajibade-80aa56255'><LinkedInIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link> 
 <Link href='https://twitter.com/Aloffawiy'> <TwitterIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link> 
  <Link href='https://github.com/Al-offawiy'> <GitHubIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link>  
   </div>

</div>
 
</>
   
)
}
export default Contact;