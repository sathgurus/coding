import React from 'react'
import { useParams,Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { useState,useEffect } from 'react'
import axios from 'axios';




export function Edit(){

    const[state,setState]=useState({
        name:'',
        email:'',
        date:'',
    });

    const handlechange=(e)=>{
        setState((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    console.log(state);

   



    return(
        <body className='background'>
            

            {state.map((value,index)=>
            <div className='container' key={index}>
            <h1>ADD EMPLOYEES</h1>
                
                
                <div className='col-lg-12 d-flex flex-row justify-content-center'>

                <div className='col-lg-4'>&nbsp;</div>
                
                <div className='col-lg-4 pt-5'>
                 <form className='form ' onSubmit={handle}>
                    <label>Enter your Name </label><br></br>
                    <input type='text' name='name' id='name' placeholder='Enter your name..'  className='form-control' onChange={handlechange} defaultValue={value.name}/><br></br>

                    <label>Enter your Email </label><br></br>
                    <input type='email' name='email' id='email' placeholder='Enter your email..' className='form-control' onChange={handleChange} defaultValue={value.email}/><br></br>

                    <label>Date_of_Joining </label><br></br>
                    <input type='date' name='Doj' id='date' placeholder='Enter your email..' className='form-control' onChange={handlechange} defaultValue={value.date}/>

                    <input type='submit' value='save' className='btn btn-success mt-5'/>

                    <Link to='/' >
                        <input type='button' value='GoBack' className='btn btn-dark btn-group ml-3 mt-5'/>
                    </Link>

                </form>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
                </div>
            </div>
            )}
            
        </body>
    );

    

}

