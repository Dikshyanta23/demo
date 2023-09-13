import React from 'react'
import { useGlobalContext } from '../App'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CartClub, CartDrink } from '../Components';


const Cart = () => {
    const navigate = useNavigate()
    const {club, stock, calculateTotal, setStock, setClub, handleModify} = useGlobalContext();
    const selectedClub = club[0]


  return (
    <Wrapper>
      <h2>Your items</h2>
      <div className="club">
        <h3>Your club</h3>
        <div className="club-grid">
          <CartClub {...selectedClub} />
        </div>
      </div>
      <h3>Your drinks</h3>.{' '}
      <div className="drink">
        <div className="drink-container">
          {stock.map((item) => {
            return <CartDrink key={item.id} {...item} />;
          })}
        </div>
      </div>
      <div className="btn-container">
        <p>Total cost: £40</p>
        <Link to="/payment" className="btn">
          Payment
        </Link>
        <button
          type="button"
          className="btn"
          onClick={() => navigate('/clubs')}
        >
          Modify order
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .club-grid {
    display: grid;
    justify-content: center;
  }
  .drink {
    display: grid;
    justify-content: center;
  }
  .drink-container {
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;

    gap: 2rem;
  }

  .btn-container {
    display: flex;
    align-items: center;

    gap: 0.5rem;
    justify-content: center;
    margin: 2rem auto;
  }
  @media (min-width: 800px) {
    .drink-container {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }
  @media (min-width: 1100px) {
    .drink-container {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 4rem;
    }
  }
`;

export default Cart
