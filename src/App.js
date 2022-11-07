import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Watch from "./components/Pages/Watch";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:channelId" element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
