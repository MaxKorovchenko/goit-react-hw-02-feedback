import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 10px;

  list-style: none;
`;

export const Button = styled.button`
  padding: 7px 14px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 2px 2px 7px 1px #252070;
  background-color: white;
  transform: scale(1);
  cursor: pointer;

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    color: white;
    background-color: #252070;
  }
`;
