import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: whitesmoke;
  box-shadow: 1px 1px 1px 2px grey;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`;
