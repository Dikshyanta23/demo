import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Formrow, Logo} from '../Components/'
import styled from 'styled-components'
import { useGlobalContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const {validUsers} = useGlobalContext()
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userFound = validUsers.filter((item)=> {
      item['email'] === email && item['password'] === password;
      return item
    })
    if (userFound.length > 0) {
      navigate('/clubs')
    }
    else {
      alert('No user found')
    }

  }
  return (
    <Wrapper>
      <form className="form" onSubmit = {handleSubmit}>
        <Logo />
        <h4>Login</h4>
        <Formrow type="email" name="email" />
        <Formrow type="password" name="password"/>
        <button className='btn btn-block' type='submit'>Submit</button>
        <p>Not a member yet?
          <Link to='/register' className='member-btn'>Register</Link>
        `</p>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.3rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid #6c63ff;
  }
  h4 {
    text-align: center;
    margin-bottom: 1.3rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: #6c63ff;
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;
export default Login
