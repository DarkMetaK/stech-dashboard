import styled from 'styled-components'

interface SkeletonProps {
  height?: string
  width?: string
  radius?: string
}

export const Skeleton = styled.div<SkeletonProps>`
  height: ${(props) => props.height || '2rem'};
  width: ${(props) => props.width || '100%'};
  border-radius: ${(props) => props.radius || '8px'};
  display: inline-block;

  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme['zinc-700']} 25%, ${theme['zinc-800']} 50%, ${theme['zinc-700']} 75%)`};
  background-size: 200% 100%;

  animation: shimmer 1.5s infinite linear;

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`
