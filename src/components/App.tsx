import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
