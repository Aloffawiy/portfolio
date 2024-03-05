import {Typography, Link}  from'@mui/material/';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
return(
    
<>
    
<div className="stage" style={{display:'flex'}}>
  <Typography className='name1' style={{color:'#0c2461', fontSize:'60px', marginLeft:'15px', }}>Al</Typography>
  <Typography className='name2' style={{color:'white', fontSize:'60px',}}>O</Typography>
<figure class="ball"></figure>
<Typography className='name'  style={{color:'#0c2461', fontSize:'60px', marginLeft:'1px', fontStyle:'oblique'}}>ffawiy</Typography> 
</div>
    
    <Typography variant='h3'className='title-contact'>Contact me!</Typography>

<div className="connects" style={{ marginTop:'200px'}}>

<div className="connect2" >
<Typography  style={{color:'#0c2461',fontSize: '25px', maxWidth:'500px'}}><strong>If you have a project in mind or you just want to converse
    feel free to contact me</strong></Typography>
<a href="mailto:fawazmusty247@gmail.com"  style={{textDecoration:'none', color:'white'}} ><Typography variant='h5'>fawazmusty247@gmail.com</Typography></a>

<a style={{textDecoration:'none', color:'white'}} href="tel:+2347085812226"><Typography variant='h5'>07085812226</Typography></a>

</div>

<div className="connect1" style={{color:'white', paddingRight:'120px'}}>
<Typography style={{color:'#0c2461', fontSize: '35px'}}> <strong> Connect with me</strong> </Typography><br />
<Link  href='https://www.linkedin.com/in/fawas-ajibade-80aa56255'><LinkedInIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link> 
 <Link href='https://twitter.com/Aloffawiy'> <TwitterIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link> 
  <Link href='https://github.com/Al-offawiy'> <GitHubIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link>  
   </div>

</div>
 
</>
   
)
}
export default Contact;