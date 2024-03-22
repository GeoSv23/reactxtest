import SectionPromo from "./components/SectionPromo/SectionPromo";
import SectionGift from "./components/sectionGift/SectionGift";
import "./root.css";
import SectionWithForm from "./components/SectionWithForm/SectionWithForm";
import SectionShop from "./components/sectionShop/SectionShop";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <SectionPromo />
      <SectionGift />
      <SectionWithForm />
      <SectionShop />
    </Layout>
  );
}

export default App;
