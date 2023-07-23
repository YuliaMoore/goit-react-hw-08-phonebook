import { ContainerWrapper, Title } from './Container.styled';

function Container({ children, title }) {
  return (
    <ContainerWrapper>
      {title && <Title>{title}</Title>}
      {children}
    </ContainerWrapper>
  );
}

export default Container;
