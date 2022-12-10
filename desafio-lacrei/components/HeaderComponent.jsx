import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 6.4rem;
  height: 60px;
  width: 100%;

  background-color: #eeeeee;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 44px;

  color: #018762;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;
`;

const Link = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 22px;
  cursor: pointer;

  color: ${(props) =>
    window.location.pathname === props.page ? "#018762" : "#000000"};
`;

export default function HeaderComponent() {
  return (
    <Header>
      <Title>Lacrei</Title>,
      <Nav>
        <Link page='/'>Home</Link>
        <Link page='/pessoa-usuaria'>Pessoa Usuária</Link>
        <Link page='profissional'>Profissional</Link>{" "}
      </Nav>
    </Header>
  );
}
