import "./App.css";
import AllRouter from "../allRouter/AllRouter.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main>
        <AllRouter/>
      </main>
      <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
