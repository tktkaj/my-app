import { BrowserRouter, createBrowserRouter, Routes, Route } from "react-router-dom";
import SampleMainPage from "./pages/samples/SampleMainPage";
import SampleDialogPage from "./pages/samples/SampleDialogPage";
import SampleComponentsPage from "./pages/samples/SampleComponentsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/samples/SampleMain" element={<SampleMainPage/>}></Route>
        <Route path="/samples/SampleDialog" element={<SampleDialogPage/>}></Route>
        <Route path="/samples/SampleComponents" element={<SampleComponentsPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
