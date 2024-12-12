import React, { useEffect, useState } from 'react'
import { DeleteEmploye, listEmploye } from '../services/EmployeService';
import { useNavigate } from 'react-router-dom';


function ListofEmployess() {
    const [employee,setEmployee]=useState([])
    const navigator=useNavigate();

    useEffect(()=>{
        getEmployes()
        
    },[])
    function getEmployes(){
        listEmploye().then((response)=>{
            setEmployee(response.data);
            console.log(response.data)
        }).catch(error =>{
            console.error(error);
        })

    }

    function addEmploye(){
        navigator('/addEmploye');
    }
    function updateEmp(id){
        navigator(`/edit-employe/${id}`);

    }
    function DeleteEmp(id){
        DeleteEmploye(id).then((response)=>{
            console.log(response.data);
            getEmployes()
        }).catch(error=>{
            console.error(error);
        })
       
    }

   
  return (

    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary' onClick={addEmploye}>Add Employe</button>
        <div className='container-fulid'>
            <table className='table table-hover table-bordered table-striped text-center'>
                <thead>
                <tr>
                   
                       <th>ID</th>
                       <th>FIRST NAME</th>
                       <th>LAST NAME</th>
                       <th>EMAIL</th>
                       <th>ACTIONS</th>
                       
                    
                </tr>
                </thead>
                <tbody>
                {
                    employee.map(employes => 
                        <tr key={employes.id}>
                            <td>{employes.id}</td>
                            <td>{employes.firstname}</td>
                            <td>{employes.lastname}</td>
                            <td>{employes.email}</td>
                            <td><button className='btn btn-outline-info mr-5' onClick={()=>updateEmp(employes.id)}>UPDATE</button>
                            <button className='btn btn-outline-danger' onClick={()=>DeleteEmp(employes.id)} style={{marginLeft:'10px'}}>Delete</button></td>
                        </tr>

                    )
                }
                </tbody>
            </table>

        </div>
      
    </div>
  )
}

export default ListofEmployess
