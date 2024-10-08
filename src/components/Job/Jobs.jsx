import React , {useContext , useState , useEffect} from 'react'
import { useNavigate  , Link} from 'react-router-dom';
import { Context } from '../../main';
import axios from 'axios';


const Jobs = () => {


  const[jobs , setJobs] = useState([]);
  const {isAuthorized} = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(()=>{
    try {
        axios.get("https://jobseeker-backend-you4.onrender.com/api/v1/job/getAll" , 
        {withCredentials : true }
        ).then((res) => {
          setJobs(res.data)
        })     
 

    } catch (error) {
        console.log(error) 
    }
  } , []);

  if(!isAuthorized){ navigateTo("/")}
  return ( 
    <section className='jobs page'>
       <div className="container">
        <h1 >ALL AVAILABLE JOBS</h1>
        <div className="banner">
        {
          jobs.jobs && jobs.jobs.map((element) =>
          {
            return (
              <div className="card" key={element._id}>
              <p>{element.title}</p>
              <p>{element.category}</p>
              <p>{element.city},{element.country}</p>
        
               <Link to={`/job/${element._id}`}>Job Details</Link>

              

              </div>
            )
          })
        }
        </div>

       </div>
      
      
      </section>
  )
}

export default Jobs


 

