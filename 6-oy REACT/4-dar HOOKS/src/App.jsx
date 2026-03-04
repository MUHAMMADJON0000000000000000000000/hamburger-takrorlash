import React from "react";
import Products from "./components/Products";
import Time from "./components/Time";
// import Realtime from "./components/Realtime";//////
//shu nimagadur ishlamadi sababini bilmadim, lekin vaqtni korsatadigan componentni ishlatdim
import Realtime from "./components/RealTime";
const App = () => {
  return (
    <div>
      <Products />
      <Time />
      <Realtime />
    </div>
  );
};
export default App;
