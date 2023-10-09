import React from 'react'
import styled from 'styled-components';

const Trusted = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h3>Tusted By 1000+ Companies</h3>
        <div className='brand-section-slider'>
          <div className='slide'>
            <img src='https://www.freeiconspng.com/thumbs/honda-logo-png/honda-logo-png-picture-20.png' alt='trused-brands'/>
          </div>
          <div className='slide'>
            <img src='https://assets.stickpng.com/images/580b585b2edbce24c47b2c18.png' alt='trused-brands'/>
          </div>
          <div className='slide'>
            <img src='https://purepng.com/public/uploads/large/purepng.com-disney-logologobrand-logoiconslogos-251519939495wtv86.png' alt='trused-brands'/>
          </div>
          <div className='slide'>
            <img src='https://www.freeiconspng.com/thumbs/gaming-logo/esports-gaming-logo-icon-clipart-15.png' alt='trused-brands'/>
          </div>
          <div className='slide'>
            <img src='https://logohistory.net/wp-content/uploads/2023/01/Mercedes-Benz-Logo-1933-1989.png' alt='trused-brands'/>
          </div>
        </div>
      </div>
    </Wrapper>
  )
};


const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted