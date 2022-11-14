import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


const UsersForm = ({ getUserList, userSelected, deselectUser }) => {

  const { handleSubmit, register, reset } = useForm();
  
  /* const [ isCreated, setIsCreated ] = useState (false) */

  const clean = () => {
    first_name : "";
    last_name : "";
    email : "";
    birthday : "";
    password: "";
    id: ""
  }
  
  useEffect(()=> {
    if(userSelected){
      /* alert("seleccionandooooo......") */
      reset(userSelected)
    } else {
      /* alert("seleccionandooooo......en el clean") */
      reset(clean)
    }
  },[userSelected])


  const submit = (data) => {
    if (userSelected) {
      /* alert("actualizandooooooooo") */
      axios
        .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
        .then(()=> {
          getUserList()
          deselectUser()
        })
        .catch(error=> console.log(error.response?.data))
    } else {
      axios
        .post(`https://users-crud1.herokuapp.com/users/`, data)
        .then(()=>{
          getUserList()
          deselectUser() 
          })
        .catch(error=>console.log(error.response?.data))
    }
  }
  

  return (
    <form className='form-container' action="" onSubmit={handleSubmit(submit)}>

      <div className='input-container'>
        {/* <label htmlFor="lastName"> Last Name: </label> */}
        <input {...register("last_name")} type="text" id='lastName'placeholder='Last Name'/>
      </div>

      <div className='input-container'>
        {/* <label htmlFor="firstName"> First Name: </label> */}
        <input {...register("first_name")} type="text" id='firstName' placeholder='First Name'/>
      </div>

      <div className='input-container'>
        {/* <label htmlFor="birthday"> Birthday:  </label> */}
        <input {...register("birthday")} type="date" id='birthday' placeholder='Birthday' />
      </div>

      <div className='input-container'>
        {/* <label htmlFor="email"> Email: </label> */}
        <input {...register("email")} type="text" id='email' placeholder='Email' />
      </div>

      <div className='input-container'>
        {/* <label htmlFor="password"> Password: </label> */}
        <input {...register("password")} type="password" id='password' placeholder='Password' />
      </div>

      <button className='btn form-btn' > Accept </button>
      
    </form>
  );
};

export default UsersForm;