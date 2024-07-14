import { styled } from "styled-components";

const Option = ({ title, bgImage }: { title: string; bgImage: string }) => {
  return (
    <Container bgImage={bgImage}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <WonderImage src={bgImage} alt={`${title}, one of the ancient seven wonders`} />
    </Container>
  );
};

const Container = styled.div<{ bgImage: string }>`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  z-index: -1;
`;

const TitleContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 0px 4px 0px;
  padding-bottom: 12px;
  bottom: 0;
  min-width: 100%;
  text-align: right;
`;

const Title = styled.span`
font-size: 2.5em;
margin: 0px 12px;
font-family: "Libre Caslon Display";
`;

const WonderImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default Option;
