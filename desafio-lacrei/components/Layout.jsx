import Head from "next/head";
import styled from "styled-components";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;

  @media (max-width: 540px) {
    justify-content: flex-start;
  }
`;

export default function Layout({ title, subtitle, image, buttons, page }) {
  return (
    <Container>
      <Head>
        <title>Lacrei</title>
      </Head>

      <header>
        <HeaderComponent />
      </header>

      <MainComponent
        title={title}
        subtitle={subtitle}
        image={image}
        buttons={buttons}
        page={page}
      ></MainComponent>

      <footer>
        <FooterComponent />
      </footer>
    </Container>
  );
}
