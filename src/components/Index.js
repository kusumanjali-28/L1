import './Navbar.css'
import Navbar from './Navbar.js'
import p1 from './rp4.png'

function Home() {
  return (
 <div className='home'>
    <Navbar/>
   <div>
    <h2>HAVE A HAPPY AND SAFETY STAY!! <br/> <br/>
        Book your tickets by registering 
    </h2>
    <img src={p1} alt="" ></img>
   </div>
 </div>
  );
}

export default Home;
