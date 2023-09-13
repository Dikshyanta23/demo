import React from 'react'
import styled from 'styled-components';

const CartDrink = ({
  name,
  description,
  price,
  quantity,
  id,
  image,
  category,
}) => {
  return (
    <Wrapper>
      <div className="drink-image">
        <img src={image} alt={name} className="drink-article" />
      </div>
      <div className="drink-text">
        <h4>{name}</h4>
        <p>Category: {category}</p>
        <p>{description}</p>
        <p>£{price}</p>
        <p>Quantity:{quantity}</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  .drink-article {
    width: 100%;
    height: 270px;
  }
  .drink-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;
export default CartDrink
