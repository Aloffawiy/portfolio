import profilePic from './assets/myPic.jpeg' 
import {Link, Typography}  from '@mui/material/';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


const Home = () => {
    return(
<>

<div className="stage" style={{display:'flex'}}>
  <Typography style={{color:'#0c2461', fontSize:'60px', marginLeft:'15px'}}>Al</Typography>
  <Typography style={{color:'white', fontSize:'60px', }}>O</Typography>
<figure class="ball"></figure>
<Typography  style={{color:'#0c2461', fontSize:'60px', marginLeft:'1px', fontStyle:'oblique'}}>ffawiy</Typography> 
</div>
    <div className='home-container' >
     
  
      <Typography variant='h5' className='info-msg'> <strong>
        I am Ajibade Fawas Muhammad also known as Aloffawiy. 
        As a full-stack developer, I bring a unique blend of expertise
       in both frontend and backend technologies, allowing me to create seamless and
        dynamic web and mobile applications from start to finish. With a passion for clean code
         and user-centric design. Leveraging my skills in languages
           such as JavaScript, Python, and Java, and tools and technologies like Reactjs, React Native, Node.js 
            HTML, CSS, mongoDb, mongoose, mySql, and many more, i'm committed to continuous
             learning and staying updated with the latest industry trends. I 
              deliver high-quality solutions that exceed client expectations and contribute to the
               growth of their business.
    </strong></Typography>


  <div className='details'>
    <img src={profilePic} className='info-img' alt="logo" />
   <button className='btn' ><Link style={{fontSize:'30px', color:'white', textDecoration:'none'}} href="https://flowcv.com/resume/mrnv4rhpdc"> View my cv</Link> </button>
   </div>

        </div>
    <Link href='/experience' className='pointer' ><ArrowCircleDownIcon 
    style={{color:'#0c2461', fontSize:'70px', marginLeft:'150px', }} />
  </Link>

      </>
       
    )    
    }
    export default Home;