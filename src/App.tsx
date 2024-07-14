import Option from "./components/option/Option";
import Carousel from "./components/carousel/Carousel";

import "./App.css";

function App() {
  const options = [
    <Option key="Babylon" title="Babylon" bgImage={"../src/assets/babylon.jpeg"} />,
    <Option key="Rhodes" title="Rhodes" bgImage={"../src/assets/rhodes.jpeg"} />,
    <Option key="Gizah" title="Gizah" bgImage={"../src/assets/giza.jpeg"} />,
    <Option key="Ephesos" title="Ephesos" bgImage={"../src/assets/ephesos.jpg"} />,
    <Option key="Olympia" title="Olympia" bgImage={"../src/assets/olympia.jpg"} />,
    <Option key="Halicarnassus" title="Halicarnassus" bgImage={"../src/assets/halicarnassus.jpg"} />,
    <Option key="Alexandria" title="Alexandria" bgImage={"../src/assets/alexandria.jpeg"} />,

  ];

  return (
    <>
      <Carousel startingOptions={options} initialSpeed={70} />
    </>
  );
}

export default App;
