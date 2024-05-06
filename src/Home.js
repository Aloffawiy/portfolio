import { useNavigate } from "react-router-dom"

const Home = () => {
   const myHistory = useNavigate();

      setTimeout(() => {
myHistory('/about')
      },5000)
    return(
     
<>
<svg  viewBox="100 100 1600 600" >
   <text x="55%" y="50%" dy=".35em" text-anchor="middle" className='name1'>Ọ̀kín</text>

</svg>  

      </>  
    )    
    }
    export default Home;