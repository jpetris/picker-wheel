import Option from "./components/option/Option";
import Carousel from "./components/carousel/Carousel";
import babylonImg from "/src/assets/babylon.jpeg";
import rhodesImg from "/src/assets/rhodes.jpeg";
import gizaImg from "/src/assets/giza.jpeg";
import ephesosImg from "/src/assets/ephesos.jpg";
import olympiaImg from "/src/assets/olympia.jpg";
import halicarnassusImg from "/src/assets/halicarnassus.jpg";
import alexandriaImg from "/src/assets/alexandria.jpeg";
import "./App.css";

function App() {
  const options = [
    <Option key="Babylon" title="Babylon" bgImage={babylonImg} />,
    <Option key="Rhodes" title="Rhodes" bgImage={rhodesImg} />,
    <Option key="Gizah" title="Gizah" bgImage={gizaImg} />,
    <Option key="Ephesos" title="Ephesos" bgImage={ephesosImg} />,
    <Option key="Olympia" title="Olympia" bgImage={olympiaImg} />,
    <Option key="Halicarnassus" title="Halicarnassus" bgImage={halicarnassusImg} />,
    <Option key="Alexandria" title="Alexandria" bgImage={alexandriaImg} />,

  ];

  return (
    <>
      <Carousel startingOptions={options} initialSpeed={70}/>
    </>
  );
}

export default App;
