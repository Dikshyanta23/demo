import React from 'react'
import styled from 'styled-components'

const CartClub = ({image, name,description, price}) => {
  return (
    <Wrapper>
      <div className="image-cotainer">
        <img src={image} alt={name} className="club-img" />
      </div>
      <div className="club-text">
        <h4>{name}</h4>
        <p>{description}</p>
        <p>£{price}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
    
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2rem;

    .club-img {
        width: 100%;
    }
    .club-text {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
    }

`
export default CartClub
