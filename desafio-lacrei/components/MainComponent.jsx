import styled from "styled-components";
import Link from "next/link";

const Main = styled.main`
  display: flex;
  gap: 16vw;

  margin: 6rem 6.4rem 0;

  @media (max-width: 1040px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0rem;
    margin-top: 3.2rem;

    gap: 0.5vw;
  }

  @media (max-width: 540px) {
    margin-top: 0;
  }
`;

const Text = styled.div`
  @media (max-width: 540px) {
    margin-left: 1.6rem;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 65px;
  letter-spacing: -1px;

  margin-bottom: 3.2rem;

  color: #1f1f1f;

  @media (max-width: 1040px) {
    font-size: 3.2rem;
    margin-bottom: 0;
  }

  @media (max-width: 540px) {
    font-size: 2.4rem;
    text-align: left;
  }
`;

const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 33px;

  padding-left: ${(props) => (props.page === "home" ? "0" : "2.4rem")};
  margin-bottom: 4.8rem;

  border-left: ${(props) =>
    props.page === "home" ? "none" : "5px solid var(--color-primary)"};

  color: var(--gray);

  @media (max-width: 1040px) {
    font-size: 1.6rem;
    line-height: 40px;
  }

  @media (max-width: 540px) {
    font-size: 1.4rem;
    line-height: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 6.9rem;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;

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

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 540px) {
    font-size: 2rem;
    width: 19rem;
    justify-self: center;
  }
`;

const Image = styled.img`
  width: 45%;

  @media (max-width: 1040px) {
    width: 50%;
    text-align: left;
  }

  @media (max-width: 540px) {
    width: 90%;
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
        <Text>
          <Title>{title}</Title>
          <Subtitle page={page}>{subtitle}</Subtitle>
        </Text>
        {buttons && (
          <Buttons>
            <Link href='/pessoa-usuaria'>
              <Button>Pessoa Usuária</Button>
            </Link>
            <Link href='/profissional'>
              <Button name='profissional'>Profissional</Button>
            </Link>
          </Buttons>
        )}
      </div>
      <Image src={image.src} />
    </Main>
  );
}
