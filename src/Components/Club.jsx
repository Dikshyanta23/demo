import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../App'

const Club = ({id, name, image, description, price, handleSelectClub}) => {
  return (

    <Wrapper>
      <div className="image-container">
        <img src={image} alt={name} className="drink-img" />
      </div>
      <div className="drink-text">
        <h4>{name}</h4>
        <p>{description}</p>
        <p>£{price}</p>
        <div className="btn-bar">
          <button onClick={()=>handleSelectClub(id)} className='btn'>
            Select
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  background: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: start;
  gap: 2rem;
  padding: 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
  width: 420px;

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .drink-img {
    height: 200px;
    width: 200px;
    border-radius: 0.5rem;
  }
  .drink-text {
    padding-top: 0rem;
    padding-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .btn-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  

`;

export default Club
