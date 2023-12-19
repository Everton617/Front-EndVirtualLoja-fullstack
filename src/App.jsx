import TopBar from "./components/topBar";
import AsideBar from "./components/asideBar";
import Carrossel from "./components/carrossel"
import Banner from "./components/banner";
import Features from "./components/features";
import SlideBar from "./components/slideBar"
import BannerGT from "./components/bannerGT";
import BannerCategorias from "./components/bannerCategorias";
import './App.css'


function App() {
  return (
    <>
      <TopBar />
        <AsideBar/>
        <Carrossel/>
        <Banner/>
        <Features/>
        <SlideBar/>
        <BannerGT/>
        <BannerCategorias/>
    </>
  );
}

export default App;