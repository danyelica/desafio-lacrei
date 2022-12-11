import Layout from "../components/Layout";
import PessoaUsuariaImage from "../public/assets/pessoa-usuaria.svg";

export default function PessoaUsuaria() {
  return (
    <Layout
      title='Pessoa Usuária'
      subtitle='A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.'
      image={PessoaUsuariaImage}
      page='pessoa-usuaria'
    />
  );
}
