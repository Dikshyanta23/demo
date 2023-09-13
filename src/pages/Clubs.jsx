import React from 'react'
import { useGlobalContext } from '../App'
import styled from 'styled-components'
import Club from '../Components/Club'
import { useNavigate } from 'react-router-dom'

const Clubs = () => {

  const navigate = useNavigate()
  const {clubmenu, setClub} = useGlobalContext()
  const handleSelectClub = (id) => {
    const club = clubmenu.filter((item) => item.id === id);
    setClub(club);
    navigate('/limit');
  };
  return (
    <Wrapper>
      <h2>Choose your club</h2>
      <div className="club-container">
    {clubmenu.map((club)=> {
      return <Club key = {club.id} {...club} handleSelectClub = {handleSelectClub}/>
    })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  width: 90vw;
  margin: 4rem auto;
  h2 {
    text-align: center;
  }
  .club-container {
    margin-top: 2rem;
    display: grid;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 900px) {
    .club-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1360px) {
    .club-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Clubs
