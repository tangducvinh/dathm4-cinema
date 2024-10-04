import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <div className="bg-gray-800 flex justify-center p-8">
        <Footer />
      </div>
    </div>
  );
};

export default App;
