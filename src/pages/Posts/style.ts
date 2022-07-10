import styled from 'styled-components';

export const Post = styled.div`
  width: 30%;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ListPost = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  margin-top: 1rem;
`