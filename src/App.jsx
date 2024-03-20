import SectionPromo from "./components/SectionPromo/SectionPromo";
import SectionGift from "./components/sectionGift/SectionGift";
import "./root.css";
import SectionWithForm from "./components/SectionWithForm/SectionWithForm";
import SectionShop from "./components/sectionShop/SectionShop";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SectionPromo />
      <SectionGift />
      <SectionWithForm />
      <SectionShop />
    </div>
  );
}

export default App;
