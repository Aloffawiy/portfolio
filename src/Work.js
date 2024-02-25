import logo from './Makkah.jpg'
import {Container, Typography, Link}  from '@mui/material/'; 
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Work = () => {
    return(
      <div className="work"><br />
    <br/><br/><Typography variant='h3'style={{ color:'#0c2461',  }} ><strong>Sample Work</strong> </Typography>

    <br/><br/><div className="edu-container"  >

    <Link  style={{textDecoration:'none'}} href="">
    <Container  className="samples">
      <img src={logo} style={{width:'200px', borderRadius:'100px'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>Mairuwa</strong> </Typography><br />
    <Typography  style={{ color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Ea placeat odio. 
</Typography>
    </Container>
</Link>

<Link  style={{textDecoration:'none'}} href="">
    <Container  className="samples">
      <img src={logo} style={{width:'200px', borderRadius:'100px'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>uBill</strong> </Typography><br />
    <Typography  style={{ color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Ea placeat odio. 
</Typography>
    </Container>
</Link>

<Link style={{textDecoration:'none'}} href="">
    <Container  className="samples">
      <img src={logo} style={{width:'200px', borderRadius:'100px'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>Albayyan blog</strong> </Typography><br />
    <Typography  style={{ fontSize:'16px', color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Ea placeat odio. 
</Typography>
    </Container>
    </Link>
    </div>

    <Link href='/contact'><ArrowCircleDownIcon style={{color:'#0c2461',fontSize:'70px',marginLeft:'1200px', marginTop:'50px'}}></ArrowCircleDownIcon></Link>
      </div>  
    )    
    }
    export default Work;