import profilePic from './assets/myPic1.jpg' 
import {Typography,Button, Container, Link}  from '@mui/material/';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Home = () => {
    return(
      <>
  
    <Container className='home-container' style={{display:'flex', justifyContent:'space-between'}}>
   
    <div className="details" style={{marginTop:'200px', marginRight:'200px'}} >
    <Typography variant='h6' style={{color:'#0c2461', fontSize:'40px'}}><strong>Ajibade Fawas Muhammad</strong></Typography>
    <Button disabled style={{backgroundColor:'whitesmoke', borderRadius:'88px', fontSize:'35px', color:'#0c2461', width:'550px'}}>
      <strong>Software Engineer</strong></Button>
   </div>
    <img src={profilePic} style={{width: '800px', height:'470px', borderRadius:'100px', marginTop:'80px'}} alt="logo" />
    </Container>
    <Link href='/about'><ArrowCircleDownIcon  style={{color:'#0c2461', fontSize:'70px',marginLeft:'1200px'}} >
      </ArrowCircleDownIcon></Link>
      </>  
    )    
    }
    export default Home;