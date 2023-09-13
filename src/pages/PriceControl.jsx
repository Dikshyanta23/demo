import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const PriceControl = () => {
  const navigate = useNavigate();
    const [sliderVal, setSliderVal] = useState(100)
    const handleSliderChange = (e) => {
        setSliderVal(e.target.value)

    }
    const handleClick = () => {
      navigate('/drinks')
    }
  return (
    <Wrapper>
      <h2 style={{marginBottom: '2rem'}}>Would you like to set a limit on money</h2>
<div className="slider">
    <input type="range" min="0" max="200" value={sliderVal} onInput={handleSliderChange} className='range' />
        <p>{sliderVal}</p>
        </div> 
        <div className="btn-bar">
            <button type='button' className='btn' onClick={handleClick}>Set Limit</button>
            <button type = 'button' className='btn' onClick={handleClick}>Do not bother</button>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  display: grid;
  place-items: center;
  margin: 4rem auto;
  .slider {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background: #FFFFFF;
    border-radius: 0.5rem;
  }
  .range {
    width: 15rem;
  }
  .btn-bar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export default PriceControl
