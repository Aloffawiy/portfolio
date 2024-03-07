import { useNavigate } from "react-router-dom"

const Home = () => {
   const myHistory = useNavigate();

      setTimeout(() => {
myHistory('/about')
      },5000)
    return(
     
<>
<svg  viewBox="0 0 1320 300">
   <text x="23%" y="50%" dy=".35em" text-anchor="middle" className='name1'>Al</text>
4<text x="36%" y="50%" dy=".35em" text-anchor="middle" className='name2'>o</text>

<text x="65%" y="50%" dy=".35em" text-anchor="middle" className='name3' >ffawiy</text>
</svg>  

      </>  
    )    
    }
    export default Home;