import styled, { keyframes } from 'styled-components';

interface LoadingSkeletonProps {
  width: string;
  height: string;
}

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`

export const LoadingSkeleton = styled.div<LoadingSkeletonProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 1rem 0;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  -webkit-animation: 1.5s ${shine} linear infinite;
  animation: 1.5s ${shine} linear infinite;
`