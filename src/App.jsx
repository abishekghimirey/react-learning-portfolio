import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Concepts from "./pages/Concepts";
import Notes from "./pages/Notes";

function App() {

  return (

    <HashRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/skills"
          element={<Skills />}
        />

        <Route
          path="/concepts"
          element={<Concepts />}
        />

        <Route
          path="/notes"
          element={<Notes />}
        />

      </Routes>

      <Footer />

    </HashRouter>

  );
}

export default App;