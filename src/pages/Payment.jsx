import React from 'react'
import styled from 'styled-components'
import { Formrow } from '../Components';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
   
    const navigate = useNavigate()
    const handleSubmit = (event) => {
         event.preventDefault();
        navigate('/qr_page')
    }
  return (
    <Wrapper>
      <h1>Payment</h1>
      <form className='form' onSubmit={handleSubmit}>
        <Formrow type="text" name="16 digits" />
        <Formrow type="text" name="name" />
        <Formrow type="text" name="Expiry month" />
        <Formrow type="text" name="Expiry year" />
        <Formrow type="text" name="CVV" />
        <div className="btn-container">
          <button type="submit" className="btn">
            Submit
          </button>
          <button type='button' className='btn'>Gpay/Apple Pay/ Samsung Pay</button>
        </div>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.main`
    h1 {
        text-align: center;
    }
    .btn-container {
        display: grid;
        justify-content: center;
        gap: 0.5rem;
    }
    .form {
        border-radius: 0.5rem;
    }
`;
export default Payment
