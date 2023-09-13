import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Logo, Formrow } from '../Components'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/login')

  }
  return (
    <Wrapper>
      <form className="form" onSubmit = {handleSubmit}>
        <Logo />
        <h4>Register</h4>
        <Formrow type="text" name="name" defaultValue="john" />
        <Formrow
          type="text"
          name="lastName"
          defaultValue="smith"
          labelText="last name"
        />
        <Formrow type="text" name="location" defaultValue="earth" />
        <Formrow type="email" name="email" defaultValue="john@gmail.com" />
        <Formrow type="password" name="password" defaultValue="secretstring" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login Page
          </Link>
        </p>
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
    color:#6c63ff;
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;

export default Register
