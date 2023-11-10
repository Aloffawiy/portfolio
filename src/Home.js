import profilePic from './profie2.jpg' 
import {Typography,Button, Container, Link}  from '@mui/material/';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Home = () => {
    return(
      <div className="home" style={{backgroundColor:'#0c2461', minHeight: '100vh'}} >
    
    <Container style={{display:'flex', justifyContent:'space-between'}}>
   
    <div className="details" style={{marginTop:'325px', marginRight:'200px'}} >
    <Typography variant='h6' style={{color:'#6ab04c', fontSize:'40px'}}><strong>Ajibade Fawas Muhammad</strong></Typography>
    <Button style={{backgroundColor:'whitesmoke', borderRadius:'88px', fontSize:'35px', color:'#0c2461', width:'550px'}}>
      <strong>Software Engineer</strong></Button>
   </div>
    <img src={profilePic} style={{width: '800px', height:'470px', borderRadius:'100px', marginTop:'139px' ,marginLeftt:'39800px' }} alt="logo" />
    </Container>
    <Link href='/about'><ArrowCircleDownIcon  style={{color:'#6ab04c', fontSize:'80px', marginTop:'90px',marginLeft:'1300px'}} >
      </ArrowCircleDownIcon></Link>
      </div>  
    )    
    }
    export default Home;