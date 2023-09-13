import React from 'react'
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import { GrPowerReset } from 'react-icons/gr';
import styled from 'styled-components';
import { useGlobalContext } from '../App';
import { useState } from 'react';


const Drink = ({id, image, name, category, description, price}) => {
    const { addItem, stock, reduceItem, removeItem } = useGlobalContext();
    const [number, setNumber] = useState(0);
 const handleAddClick = (id) => {
   setNumber(number + 1);
   addItem(id);
 };
 const handleSubtractClick = (id) => {
   if (number > 0) {
     setNumber(number - 1);
   }
   reduceItem(id);
 };
 const handleResetClick = (id) => {
   setNumber(0);
   removeItem(id);
 };

  return (
    <Wrapper>
      <div className="image-container">
        <img src={image} alt={name} className="drink-img" />
      </div>
      <div className="drink-text">
        <h4>{name}</h4>
        <p>{category}</p>
        <p>{description}</p>
        <p>£{price}</p>
        <div className="btn-bar">
          <button onClick={() => handleSubtractClick(id)} className="plusminus">
            <AiFillMinusSquare />
          </button>
          <p>{number}</p>
          <button onClick={() => handleAddClick(id)} className="plusminus">
            <AiFillPlusSquare />
          </button>
          <button onClick={() => handleResetClick(id)} className="reset">
            <GrPowerReset />
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
  .stock {
    margin: 1rem auto;
    max-width: 420px;
    margin-top: 2rem;
    display: grid;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 0.5rem;
    position: relative;
    margin-bottom: 0.5rem;
  }
  .stockitem {
    width: 100%;
    margin: 0.5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    border: 2px solid;
    padding: 0.5rem;
  }
  .stock-text {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 2px;
  }

  .total-price {
    position: absolute;
    right: 2%;
    bottom: 2%;
    margin-top: 1rem;
  }
  .stock-container {
    margin-bottom: 2rem;
  }

  .plusminus {
    padding: none;
    background: white;
    color: var(--primary-500);
    border-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
  .reset {
background: var(--primary-500);
border-color: transparent;
font-size: 1rem;
width: 1.5rem;
height: 1.5rem;
color: white;
display: flex;
justify-content: center;
align-items: center;
  }

`;
export default Drink
