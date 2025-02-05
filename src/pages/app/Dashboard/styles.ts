import styled from 'styled-components'

export const DashboardContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-bottom: 88px;
  }
`

export const Content = styled.main`
  padding: 1.5rem;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme['zinc-50']};
  }
`

export const Charts = styled.div`
  margin-top: 1.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`
