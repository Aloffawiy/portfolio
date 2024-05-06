import {Typography,}  from '@mui/material/'; 



const Contact = () => {
    return(
      <>

<div className="stage" style={{display:'flex'}}>
  <Typography style={{color:'#0c2461', fontSize:'60px', marginLeft:'17px'}}>Ọkín</Typography>
<figure class="ball"></figure>
</div>

      <Typography className='title-edu' variant='h3'>Education & Experience</Typography>
    

    <div className="edu-div">

    <a href='https://www.inecnigeria.org/'  className='edu'><br/><br/>
    <Typography  variant='h5'>2022</Typography><br/>
    <Typography style={{color:'#6ab04c'}} variant='h4'>Data collection and managment</Typography><br/>
    <Typography  variant='h5'>INEC headquaters Kaduna</Typography><br/><br/><br/>
    </a>
   
    <a href='https://ihifix.com/'  className='edu' ><br/><br/>
    <Typography  variant='h5'>2023</Typography><br/>
    <Typography style={{color:'#6ab04c'}} variant='h4'>Backend Engineering</Typography><br/><br/><br/>
    <Typography  variant='h5'>Ihifix technologies</Typography><br/><br/><br/>
    </a>

    <a href='https://auk.edu.ng/' className='edu'  ><br/><br/>
    <Typography  variant='h5'>2023</Typography><br/>
    <Typography style={{color:'#6ab04c'}} variant='h4'>BSc.<br/> Software Engineering</Typography><br/>
    <Typography  variant='h5'>Al-qalam university katsina</Typography><br/><br/><br/>
    </a>

    </div>
    <a href='/work' className='nav-a'>⇩</a>
   
      </>  
    )    
    }
    export default Contact;