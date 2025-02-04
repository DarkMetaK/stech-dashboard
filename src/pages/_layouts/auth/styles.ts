import styled from 'styled-components'

export const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`

export const Hero = styled.div`
  padding: 3rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }

  span {
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }

  @media (max-width: 920px) {
    justify-content: center;
    padding: 1.25rem;
  }
`
