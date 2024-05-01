import { useNavigate } from "react-router-dom"

const Home = () => {
   const myHistory = useNavigate();

      setTimeout(() => {
myHistory('/about')
      },5000)
    return(
     
<>
<svg  viewBox="100 -200 1200 500" >

   <text x="60%" y="-20%" dy=".35em" text-anchor="middle" className='name1'>Ọ̀kín</text>
 
  <text  x="50%" y="10%" dy=".35em" className='name2'>technologies</text>
</svg>  

      </>  
    )    
    }
    export default Home;