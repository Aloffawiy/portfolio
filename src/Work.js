import logo from './Makkah.jpg'
import {Container, Typography, Link}  from '@mui/material/'; 
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Work = () => {
    return(
      <div className="work"  style={{backgroundColor:'#6ab04c', minHeight: '100vh'}} ><br />
    <br/><br/><Typography variant='h3'style={{ color:'#0c2461', marginTop:'40px' }} ><strong>Sample Work</strong> </Typography>

    <br/><br/><div className="edu-container" style={{ marginTop:'30px'}} >

    <Link  style={{textDecoration:'none'}} href="">
    <Container  className="samples">
      <img src={logo} style={{width:'200px', borderRadius:'100px'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'#0c2461'}}>Mairuwa</strong> </Typography><br />
    <Typography variant='h5' style={{ color:'white', fontFamily:'Roboto, sans-serif'}} >Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Ea placeat odio<br/> hic voluptas minima eaque praesentium. 
</Typography>
    </Container>
</Link>

<Link  style={{textDecoration:'none'}} href="">
    <Container  className="samples">
      <img src={logo} style={{width:'200px', borderRadius:'100px'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'#0c2461'}}>uBill</strong> </Typography><br />
    <Typography variant='h5' style={{ color:'white', fontFamily:'Roboto, sans-serif'}} >Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Ea placeat odio<br/> hic voluptas minima eaque praesentium. 
</Typography>
    </Container>
</Link>

<Link style={{textDecoration:'none'}} href="">
    <Container  className="samples">
      <img src={logo} style={{width:'200px', borderRadius:'100px'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'#0c2461'}}>Albayyan blog</strong> </Typography><br />
    <Typography variant='h5' style={{ color:'white', fontFamily:'Roboto, sans-serif'}} >Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Ea placeat odio<br/> hic voluptas minima eaque praesentium. 
</Typography>
    </Container>
    </Link>
    </div>

    <Link href='/contact'><ArrowCircleDownIcon style={{color:'#0c2461',fontSize:'80px',marginLeft:'1300px', marginTop:'100px'}}></ArrowCircleDownIcon></Link>
      </div>  
    )    
    }
    export default Work;