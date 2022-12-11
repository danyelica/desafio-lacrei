import Layout from "../components/Layout";
import ProfissionalImage from "../public/assets/profissional.svg";

export default function Profissional() {
  return (
    <Layout
      title='Profissional'
      subtitle='Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+'
      image={ProfissionalImage}
      page='profissional'
    />
  );
}
