import styled from 'styled-components';

export const CardArea = styled.div`
  background-color: #ffffff;
  /* padding: 1rem; */
  /* border-radius: 0.5rem; */
  margin: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  height: 15rem;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #e76a24; 
  
  transition: transform .9s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

export const CardImg = styled.img`
  width: 15rem;
  height: 18rem;
  object-fit: cover;
`;

export const Name = styled.h3`
  color: #e76a24;
  text-align: center;
  padding: 0.5rem;
  background-color: #ffffff;
  font-size: 1.3em;
`;
