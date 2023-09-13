import React from 'react'
import Drink from '../Components/Drink'
import styled from 'styled-components'
import { useGlobalContext } from '../App'
import { Link } from 'react-router-dom'

const Drinks = () => {

  const {drinkmenu, club} = useGlobalContext()
  return (
    <Wrapper>
      <h2>Add the drinks</h2>
      <div className="drinks">
        {drinkmenu.map((drink) => {
          return <Drink key={drink.id} {...drink} />;
        })}
      </div>
      <div className="btn-bar">
        <Link to="/cart" className="btn checkout">
          Checkout
        </Link>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  width: 90vw;
  margin: 4rem auto;
  h2 {
    text-align: center;
  }
  .drinks {
    margin-top: 2rem;
    display: grid;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  .btn-bar {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
  }
  .checkout {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 950px) {
    .drinks {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1390px) {
    .drinks {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export default Drinks
