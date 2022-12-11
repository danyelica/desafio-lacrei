import Layout from "../components/Layout";
import ProfissionalImage from "../public/assets/profissional.svg";

export default function Profissional() {
  return (
    <Layout
      title='Profissional'
      subtitle='A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.'
      image={ProfissionalImage}
      page='profissional'
    />
  );
}
