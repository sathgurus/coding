import React from 'react'
import { useParams,Link ,useLocation} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { useState,useEffect } from 'react'
import axios from 'axios';




export function Edit(){

    const {id} =useParams();
    const location =useLocation();
    console.log("updateId",location.state.id);
    const updateId = location.state.id
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [date,setDate]=useState('');

    useEffect(()=>{
        

        axios.get("http://localhost:3002/Edit/"+id)
        // .then((response)=>response.json())
        .then((response)=>{
            console.log("res",response)
            setName(response[0].name);
            setEmail(response[0].email);
            setDate(response[0].date);
        })
    },[]);

    const handle=async(event)=>{
        event.preventDefault();
        // var dataString =new FormData(event.target);
        // var config={headers:{"enctype":multiform/form-data}}

        const newVal ={
            id:id,
            name:name,
            email:email,
            date:date
        }

        await axios.put('http://localhost:3002/update/'+id,newVal)
        .then(function(res){
            if(res.data.status==='success'){
                alert('updated');
                window.location.href='/';
            }
            else if (res.data.status==='error'){
                alert('not updated');
                window.location.href='/';
            }
        })
    }



    return(
        <body className='background'>
            

            
            <div className='container'>
            <h1 align='center'>Edit EMPLOYEES</h1>
                
                
                <div className='col-lg-12 d-flex flex-row justify-content-center'>

                <div className='col-lg-4'>&nbsp;</div>
                
                <div className='col-lg-4 pt-5'>
                 <form className='form ' onSubmit={handle}>
                    <label>Enter your Name </label><br></br>
                    <input type='text' name='name' id='name' placeholder='Enter your name..'  className='form-control'  value={name} onChange={(e)=> setName(e.target.value)}/><br></br>

                    <label>Enter your Email </label><br></br>
                    <input type='email' name='email' id='email' placeholder='Enter your email..' className='form-control'  value={email} onChange={(e)=> setEmail(e.target.value)}/><br></br>

                    <label>Date_of_Joining </label><br></br>
                    <input type='date' name='Doj' id='date' placeholder='Enter your email..' className='form-control'  value={date} onChange={(e)=> setDate(e.target.value)}/>

                    <input type='submit' value='save' className='btn btn-success mt-5'/>

                    <Link to='/' >
                        <input type='button' value='GoBack' className='btn btn-dark btn-group ml-3 mt-5'/>
                    </Link>

                </form>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
                </div>
            </div>
            
            
        </body>
    );

    

}

