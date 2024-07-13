import { styled } from "styled-components";

const Option = ({ title, bgImage }: { title: string; bgImage: string }) => {
  return (
    <Container bgImage={bgImage}>
      <TitleContainer>
        <h1 style={{ margin: "0px 12px", fontFamily: "Libre Caslon Display", fontWeight: "400" }}>{title}</h1>
      </TitleContainer>
    </Container>
  );
};

const Container = styled.div<{ bgImage: string }>`
  display: block;
  width: 500px;
  height: 500px;
  background-image: url(${(props) => props.bgImage});
  border-radius: 8px;
  position: relative;
  z-index: -1;
`;

const TitleContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 0px 4px 0px;
  padding-bottom: 12px;
  position: absolute;
  bottom: 0;
  min-width: 100%;
  text-align: right;
  transition: all 0.5s ease;
`;

export default Option;
