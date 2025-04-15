import Header from "./Header";
import Painel from "./Painel";
import Mapa from "./Mapa";
import Parceiros from "./Parceiros";
import Rotas from "./Rotas";
import Caroussel from "./Caroussel";
import Footer from "./Footer";
import Backgroundeffect from "./Backgroundeffet";

function Home() {
  return (
    <>
      <Header />
      <Backgroundeffect />
      <Painel />
      <Mapa />
      <Parceiros />
      <Rotas />
      <Caroussel />

      <Footer />
    </>
  );
}

export default Home;
