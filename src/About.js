import profilePic from './assets/myPic.jpeg' 
import {Link, Typography}  from '@mui/material/';



const About = () => {
    return(
<>

<div className="stage" style={{display:'flex'}}>
  <Typography style={{color:'#0c2461', fontSize:'60px', marginLeft:'17px'}}>Al</Typography>
  <Typography style={{color:'white', fontSize:'60px', }}>o</Typography>
<figure class="ball"></figure>
<Typography  style={{color:'#0c2461', fontSize:'60px', marginLeft:'2px', fontStyle:'oblique'}}>ffawiy</Typography> 
</div>

    <div className='about-container' >
    
      <Typography variant='h5' className='info-msg'> 
      
        I am Ajibade Fawas Muhammad, also known as Aloffawiy. 
        As a full-stack developer, I bring a unique blend of expertise
       in both frontend and backend technologies, allowing me to create seamless and
        dynamic web and mobile applications from start to finish. With a passion for clean code
         and user-centric design. Leveraging my skills in languages
           such as JavaScript, Python, Java, and other tools and technologies like Reactjs, React Native, Node.js 
            HTML, CSS, mongoDb, mongoose, mySql, and many more, i'm committed to continuous
             learning and staying updated with the latest industry trends. I 
              deliver high-quality solutions that exceed client expectations and contribute to the
               growth of their business.
   </Typography>


  <div className='details'>
    <img src={profilePic} className='info-img' alt="logo" />
   <button className='btn' ><Link style={{fontSize:'30px', color:'white', textDecoration:'none'}} href="https://flowcv.com/resume/mrnv4rhpdc"> View my cv</Link> </button>
   </div>

        </div>
    <a href='/experience' className='nav-a' style={{marginTop:'30px'}} ><button className='nav-btn'>⇩</button></a>

      </>
       
    )    
    }
    export default About;