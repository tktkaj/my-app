import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SampleMain from "./pages/main/SampleMain";
import SampleDialog from "./pages/dialog/SampleDialog"
import SampleComponents from "./pages/components/SampleComponents";

const router = createBrowserRouter([
  { path: "/samples/SampleMain", element: <SampleMain /> },
  { path: "/samples/SampleDialog", element: <SampleDialog /> },
  { path: "/samples/SampleComponents", element: <SampleComponents /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
