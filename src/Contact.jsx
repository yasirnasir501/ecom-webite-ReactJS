import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
        <h2 className='common-heading'>Feel Free To Contact Us</h2>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462117.05297655734!2d66.82580524692254!3d25.193458564663967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696863186619!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className='container'>
          <div className='contact-form'>
            <form action="https://formspree.io/f/mpzgkaza" method='POST' className='contact-inputs'>
              <input type="text" placeholder='username' name='UserName' required autoComplete='off' />
              <input type="email" placeholder='email' name='Email' required autoComplete='off' />
              <textarea name="Message" placeholder='Enter Your Message' cols="30" rows="10" required autoComplete='off'></textarea>
              <input type="submit" />
            </form>
          </div>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;


export default Contact