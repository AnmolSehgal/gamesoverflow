import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background : #202020;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
//background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 0;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #cccccc;
  margin-bottom: 12px;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
      color: #0078f2;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #656565;
  margin-bottom: 40px;
  font-weight: bold;
`;