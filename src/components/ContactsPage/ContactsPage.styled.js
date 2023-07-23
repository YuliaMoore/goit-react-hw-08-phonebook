import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  justify-content: center;
  /* @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  } */
`;

export const ContainerWrapper = styled.div`
  border: 1px solid #000;
  margin-top: 30px;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  /* @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  } */
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const WelcomeText = styled.span`
  font-weight: 600;
  font-size: 56px;
  text-align: center;
  color: var(--main-text-color);
`;
