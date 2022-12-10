import Head from "next/head";
import styled from "styled-components";
import HomeImage from "../public/assets/home-image.svg";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  gap: 16vw;

  margin-left: 6.4rem;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 65px;

  margin-bottom: 3.2rem;
`;

const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 33px;

  margin-bottom: 4.8rem;
  width: 90%;

  color: #515151;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-family: "Nunito";
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 25px;

  padding: 1rem 0;
  width: 19.2rem;
  cursor: pointer;

  color: ${(props) => (props.name === "profissional" ? "#018762" : "#ffffff")};
  background: ${(props) =>
    props.name === "profissional" ? "#ffffff" : "#018762"};
  border: ${(props) =>
    props.name === "profissional" ? "2px solid #018762" : "none"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const Image = styled.img`
  width: 45%;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Lacrei</title>
      </Head>

      <header>
        <HeaderComponent />
      </header>

      <Main>
        <div>
          <Title>Boas vindas a Lacrei Saúde</Title>
          <Subtitle>
            Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
          </Subtitle>
          <Buttons>
            <Button>Pessoa Usuária</Button>
            <Button name='profissional'>Profissional</Button>
          </Buttons>
        </div>
        <Image src={HomeImage.src} />
      </Main>

      <footer>
        <FooterComponent />
      </footer>
    </Container>
  );
}
