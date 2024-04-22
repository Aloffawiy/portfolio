import logo1 from './assets/deenX.png';
import logo2 from './assets/Mairuwa.png';
import logo3 from './assets/Literalouge.png';
import { Typography,}  from '@mui/material/'; 



const Work = () => {
    return(
      <>

<div className="stage" style={{display:'flex'}}>
  <Typography style={{color:'#0c2461', fontSize:'60px', marginLeft:'17px'}}>Al</Typography>
  <Typography style={{color:'white', fontSize:'60px', }}>o</Typography>
<figure class="ball"></figure>
<Typography  style={{color:'#0c2461', fontSize:'60px', marginLeft:'2px', fontStyle:'oblique'}}>ffawiy</Typography> 
</div>

    <Typography variant='h3' className='title-work'>Works</Typography>

    <div className="edu-div"  >
    <a  className='work' href="https://deenx-frontend.onrender.com">
      <img src={logo1} style={{width:'250px', borderRadius:'100%'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>deenX</strong> </Typography>
    <Typography  style={{ fontSize:'18px', maxWidth:'400px',  color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >
    deenX is a muslim lifestyle blogsite that contains alot of articles about 
    different aspects of life tailored to depict it from an islamic perspective.
</Typography>
    </a>

    <a  className='work' href="https://mairuwa.onrender.com">
      <img src={logo2} style={{width:'250px', height:'250px',}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>Mairuwa</strong> </Typography>
    <Typography  style={{fontSize:'18px', maxWidth:'400px', color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >
      Mairuwa is a software solution for users to place order for pure water 
      from the comfort of their home within the shortest time possible.
</Typography>
</a>

<a  className='work' href="https://literalouge.onrender.com">
      <img src={logo3} style={{width:'250px', borderRadius:'100%'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>Literalouge</strong> </Typography>
    <Typography  style={{fontSize:'18px', color:'#0c2461', maxWidth:'400px',  fontFamily:'Roboto, sans-serif'}} > 
    Literalouge is platform where users can create an intellectual outpost
    and also outline thier views and opinions on the topic dicussed within it.
</Typography>
</a>
    </div>

    <a href='/contact' className='nav-a'>⇩</a>
      </>  
    )    
    }
    export default Work;