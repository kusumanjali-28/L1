
import '../components/Navbar.css'
import './Admin.css'
import {Link} from 'react-router-dom'

function MainAdmin(){
 

    return(
      <div>
     <>       
        <div style={{backgroundColor:'white',color:'white'}}> 
                <nav class="side-bar">
                    <div class="user-p">
                       
                        <h4>Admin</h4>
                    </div>

                    <ul>
                    <li style={{color:'white'}}>
                            <Link to="/RegisterData">
                                <span style={{color:'white'}}>RegisterData</span>
                            </Link>
                        </li>
                        
                        <li style={{color:'white'}}>
                            <Link to="/HospitalsData">
                                <span style={{color:'white'}}>Hospitals</span>
                            </Link>
                        </li>
                        <li style={{color:'white'}}>
                            <Link to="/">
                                <span style={{color:'white'}}>Home</span>
                            </Link>
                        </li>
                      
                    </ul>
                </nav>
            </div></>


      <div style={{position:'relative',marginTop:'-500px', fontFamily:'Verdana'}}>
   <div className='view-container' style={{color:'black',width:'70%',marginLeft:'400px'}}>  
  <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=" " className="adimg"></img>
    </div>
</div>
        </div>
    )
}

export default MainAdmin