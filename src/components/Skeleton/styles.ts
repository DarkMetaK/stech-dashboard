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

  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
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
