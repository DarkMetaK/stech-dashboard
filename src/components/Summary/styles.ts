import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    justify-content: center;
  }
`

interface ICard {
  variant?: 'green'
}

export const Card = styled.div<ICard>`
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme['zinc-800']};
  padding: 1rem;

  header {
    margin-bottom: 0.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-100']};
  }

  strong {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
  }

  /* strong {
    font-size: 2rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme['gray-100']};
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${(props) => props.theme['green-700']};
    `}

  @media (max-width: 480px) {
    strong {
      font-size: 1.5rem;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  } */
`
