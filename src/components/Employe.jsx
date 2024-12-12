import React, { useEffect, useState } from 'react'; // Import useState for managing component state
import { Employepost, getEmploye, putEmploye } from '../services/EmployeService';
import { useNavigate, useParams } from 'react-router-dom';

function Employe() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const {id}=useParams();

  useEffect(()=>{
    getEmploye(id).then((response)=>{
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setEmail(response.data.email);
    }).catch(error =>{
      console.error(error);

    })
  },[id]);


  const navigator =useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with data: 
    First Name: ${firstname}, 
    Last Name: ${lastname}, 
    Email: ${email}`);
    const employee={firstname,lastname,email}
    if(id){
      putEmploye(id,employee).then((response)=>{
        console.log(response.data);
        navigator('/employees');
      }).catch(error=>{
        console.error(error);
      })

    }
    else{
      Employepost(employee).then((repsonse)=>{
        console.log(repsonse.data);
        navigator("/employees")
      }
      ).catch(error=>{
        console.error(error);
      })
    }
    
  };

  
  function pageTitle(){
    if(id){
      return <h4>UPADATE YOUR Details</h4>

    }
    else{
      return <h4>Employee Details</h4>
    }
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg" style={{ width: "30rem" }}>
        <div className="card-header bg-primary text-white text-center">
          {
            pageTitle()
          }
          
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setFirstname("");
                  setLastname("");
                  setEmail("");
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Employe;
