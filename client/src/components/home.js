import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useState,useEffect } from "react";

export function Home(){

    const [data,setData]=useState([]);
    const loadData=async ()=>{
        const response=await axios.get("http://localhost:3002/get");
        setData(response.data);
    }
    useEffect(()=>{
        loadData();

    },[]);

    const deleteContact=(id)=>{
        if(window.confirm("Are you sure delete details?")){
            axios.delete(`http://localhost:3002/delete/${id}`)
           .then(function(res){
                if(res.data.status === 'error'){
                    alert('Error');
                    window.location.reload();
                }
                else if(res.data.status === 'deleted'){
                    alert('Profile Deleted');
                    window.location.href="./";
                }
            })
                .catch(function(err){
                alert(err);
                console.log(err);
                window.location.reload();
          })
        }
    
    }
    return(
        <body>
            <div className='container'>
            <h1>EMPLOYEE DEATAILS</h1>
            
                <Link to='/addemp'>
                    <button className='btn btn-add btn-danger '>Add Employee</button>
                </Link>
                
                <table className='table table-bordered table-responsiv table-lg text-center mt-3 table-hover'>
                    <thead>
                        <tr className='bg-success text-light'>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>date of joining</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((value,index)=>{
                            return(
                                <tr key={value.id}>
                                <th scope='row'>{index+1}</th>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.doj}</td>
                                <td>
                                    <Link to='/update/${value.id}'>
                                        <button className='btn btn-edit btn-primary'>Edit</button>
                                    </Link>

                                    <button className='btn btn-delete ml-3 btn-danger' onClick={()=>deleteContact(value.id)}>Delete</button>

                                    <Link to={"/update/${value.Emp_id}"}>
                                        <button className='btn btn-view ml-3 btn-info'>View</button>
                                    </Link>
                                </td>
                        </tr>

                            )
                        }
                    )}
                        
                    </tbody>

                </table>
            </div>
        </body>

    );
}