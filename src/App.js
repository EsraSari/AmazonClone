import './App.css'
import Navbar from './pages/components/Navbar'
import ProductComponent from './pages/components/ProductComponent'
import Footer from './pages/components/Footer'
import Slider from './pages/components/Slider'
import ProductSlider from './pages/components/ProductSlider'
import BackToTopButton from './pages/components/BackToTopButton'

function App() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Slider />
        <div className="-mt-64 relative z-10">
          <ProductComponent />
        </div>
      </div>
      <ProductSlider/>
      <BackToTopButton/>
      <Footer />
    </>
  );
}

export default App;
