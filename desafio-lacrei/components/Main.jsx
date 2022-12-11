import styled from "styled-components";

const Main = styled.main`
  display: flex;
  gap: 16vw;

  margin-left: 6.4rem;
  margin-top: 6rem;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;

    gap: 0.5vw;
  }
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

  padding-left: ${(props) => (props.page === "home" ? "0" : "2.4rem")};
  margin-bottom: 4.8rem;
  width: 90%;

  border-left: ${(props) =>
    props.page === "home" ? "none" : "5px solid var(--color-primary)"};

  color: var(--gray);

  @media (max-width: 768px) {
    font-size: 3.5rem;
    line-height: 40px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 6.9rem;

  @media (max-width: 540px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  font-family: "Nunito";
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 25px;

  padding: 1rem 0;
  width: 19.2rem;
  cursor: pointer;

  color: ${(props) =>
    props.name === "profissional" ? "var(--color-primary)" : "var(--white)"};
  background: ${(props) =>
    props.name === "profissional" ? "var(--white)" : "var(--color-primary)"};
  border: ${(props) =>
    props.name === "profissional" ? "2px solid var(--color-primary)" : "none"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 25rem;
  }
`;

const Image = styled.img`
  width: 45%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default function MainComponent({
  title,
  subtitle,
  image,
  buttons,
  page,
}) {
  return (
    <Main>
      <div>
        <Title>{title}</Title>
        <Subtitle page={page}>{subtitle}</Subtitle>
        {buttons && (
          <Buttons>
            <Button>Pessoa Usuária</Button>
            <Button name='profissional'>Profissional</Button>
          </Buttons>
        )}
      </div>
      <Image src={image.src} />
    </Main>
  );
}
