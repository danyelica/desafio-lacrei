import Layout from "../components/Layout";
import HomeImage from "../public/assets/home-image.svg";

export default function Home() {
  return (
    <Layout
      title='Boas vindas a Lacrei Saúde'
      subtitle='Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+'
      image={HomeImage}
      buttons={true}
      page='home'
    />
  );
}
