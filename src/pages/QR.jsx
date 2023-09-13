import React from 'react'
import styled from 'styled-components'
import qrcode from '../assets/qr_code.jpeg'

const QR = () => {
  return (
    <Wrapper>
      <h1>Please Scan the QR code below</h1>
      <img src={qrcode} alt="qr_code" className='img'/>
    </Wrapper>
  )
}

const Wrapper = styled.main`
    width: 90vw;
    margin: 0 auto;
    margin-top: 3rem;
    display: grid;
    place-items: center;

    .img {
        width: 400px;
        margin-top: 2rem;
        border-radius: 0.5rem;
        
    }
`;

export default QR
