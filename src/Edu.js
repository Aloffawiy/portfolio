import {Typography, Container, Link}  from '@mui/material/'; 
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Contact = () => {
    return(
      <div className="education" style={{minHeight: '100vh'}}  >
      <br/><br/><Typography  style={{color:'#0c2461', marginRight:'900px', fontSize:'70px'}} variant='h2'>Education &<br /> Experience</Typography>
    <br/><br/><br/>
    <Link href='/work'><ArrowCircleDownIcon  style={{color:'#0c2461',fontSize:'80px',marginLeft:'1300px'  }} ></ArrowCircleDownIcon></Link>
   

    <div className="edu-container">

    <Container style={{width:300, }} className='edu' ><br/><br/>
    <Typography  variant='h5'>2022</Typography><br/>
    <Typography style={{color:'#6ab04c'}} variant='h4'>Data collection and managment</Typography><br/>
    <Typography  variant='h5'>INEC headquaters Kaduna</Typography><br/><br/><br/>
    </Container>
   
    <Container style={{width:300, }} className='edu' ><br/><br/>
    <Typography  variant='h5'>2023</Typography><br/>
    <Typography style={{color:'#6ab04c'}} variant='h4'>Backend Engineering</Typography><br/><br/><br/>
    <Typography  variant='h5'>Ihifix technologies</Typography><br/><br/><br/>
    </Container>

    <Container style={{width:300, }} className='edu' ><br/><br/>
    <Typography  variant='h5'>2023</Typography><br/>
    <Typography style={{color:'#6ab04c'}} variant='h4'>BSc.<br/> Software Engineering</Typography><br/>
    <Typography  variant='h5'>Al-qalam university katsina</Typography><br/><br/><br/>
    </Container>

    </div>
   
      </div>  
    )    
    }
    export default Contact;