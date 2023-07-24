import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ANSStep25 from "./pages/ANSStep25";
import ANSStep24 from "./pages/ANSStep24";
import ANSStep23 from "./pages/ANSStep23";
import ANSStep22 from "./pages/ANSStep22";
import ANSStep21 from "./pages/ANSStep21";
import Suppliers from "./pages/Suppliers";
import Records from "./pages/Records";
import NewEntrySOAFilled from "./pages/NewEntrySOAFilled";
import NewEntry from "./pages/NewEntry";
import NewEntrySOA from "./pages/NewEntrySOA";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ans-step24":
        title = "";
        metaDescription = "";
        break;
      case "/ans-step23":
        title = "";
        metaDescription = "";
        break;
      case "/ans-step22":
        title = "";
        metaDescription = "";
        break;
      case "/ans-step21":
        title = "";
        metaDescription = "";
        break;
      case "/suppliers":
        title = "";
        metaDescription = "";
        break;
      case "/records":
        title = "";
        metaDescription = "";
        break;
      case "/new-entry-soa-filled":
        title = "";
        metaDescription = "";
        break;
      case "/new-entry":
        title = "";
        metaDescription = "";
        break;
      case "/new-entry-soa":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/ans-step24" element={<ANSStep24 />} />
      <Route path="/ans-step23" element={<ANSStep23 />} />
      <Route path="/ans-step22" element={<ANSStep22 />} />
      <Route path="/ans-step21" element={<ANSStep21 />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/records" element={<Records />} />
      <Route path="/new-entry-soa-filled" element={<NewEntrySOAFilled />} />
      <Route path="/new-entry" element={<NewEntry />} />
      <Route path="/new-entry-soa" element={<NewEntrySOA />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}
export default App;
