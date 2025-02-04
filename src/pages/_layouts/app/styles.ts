import styled from 'styled-components'

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
