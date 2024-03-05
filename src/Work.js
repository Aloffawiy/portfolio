import logo1 from './assets/deenX.png';
// import logo2 from './assets/Mairuwa.png';
import logo3 from './assets/Makkah.jpg';
import { Typography, Link}  from '@mui/material/'; 
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Work = () => {
    return(
      <>

<div className="stage" style={{display:'flex'}}>
  <Typography className='name1' style={{color:'#0c2461', fontSize:'60px', marginLeft:'15px', }}>Al</Typography>
  <Typography className='name2' style={{color:'white', fontSize:'60px',}}>O</Typography>
<figure class="ball"></figure>
<Typography className='name'  style={{color:'#0c2461', fontSize:'60px', marginLeft:'1px', fontStyle:'oblique'}}>ffawiy</Typography> 
</div>

    <Typography variant='h3' className='title-work'>Works</Typography>

    <div className="edu-div"  >

    <a  className='work' href="https://mairuwa.onrender.com/">
      <img src={logo3} style={{width:'250px', borderRadius:'100%'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>Mairuwa</strong> </Typography>
    <Typography  style={{fontSize:'18px', color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Ea placeat odio. 
</Typography>
</a>

<a  className='work' href="https://ubill.onrender.com/user/payElectricity">
      <img src={logo3} style={{width:'250px', borderRadius:'100%'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>uBill</strong> </Typography>
    <Typography  style={{fontSize:'18px', color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Ea placeat odio. 
</Typography>
</a>

<a  className='work' href="">
      <img src={logo1} style={{width:'250px', borderRadius:'100%'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>deenX</strong> </Typography>
    <Typography  style={{ fontSize:'18px', color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Ea placeat odio. 
</Typography>
    </a>

    </div>

    <Link href='/contact'><ArrowCircleDownIcon style={{color:'#0c2461',fontSize:'70px', marginLeft:'150px', marginTop:'35px'}}></ArrowCircleDownIcon></Link>
      </>  
    )    
    }
    export default Work;