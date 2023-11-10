import aboutPic from './coding1.jpg'
import {Typography,Button, Container, Link }  from '@mui/material/'; 
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const About = () => {
return(
  <div className="about"  style={{backgroundColor:'#6ab04c', minHeight: '100vh'}}  >
    <Container  style={{display:'flex', justifyContent:'space-between'}}>
        <img src={aboutPic} alt='about-pic' style={{ width: '450px', height:'600px',borderRadius:'80px', marginTop:'105px' }} />
        <div className="about-info" style={{color:'#0c2461', marginTop:'200px', marginLeft:'80px'}}>
<Typography variant='h5' style={{textDecoration:'underline'}} ><strong>ABOUT ME</strong> </Typography>
<Typography variant='h4' style={{fontFamily:'monospace'}} >upti animi debitis accusantium! Qui, molestiae. Voluptatem aperiam repellendus architecto fugiat, voluptates, dicta perspiciatis velit laborum odio, reiciendis asperiores quibusdam accusantium.</Typography><br /><br />
<Button  className="cv"  style={{backgroundColor:'#0c2461', borderRadius:'10px'}} ><Link style={{fontSize:'20px', color:'whitesmoke', textDecoration:'none'}} href="https://flowcv.com/resume/mrnv4rhpdc"> View my cv</Link> </Button>
</div>
</Container> 
<Link href='/experience'><ArrowCircleDownIcon  style={{ color:'#0c2461',fontSize:'80px',marginLeft:'1300px'}}>
  </ArrowCircleDownIcon></Link>
  </div>  
)    
}
export default About;