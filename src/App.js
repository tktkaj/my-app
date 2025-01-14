import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SampleMain from "./pages/main/SampleMain";
import SampleDialog from "./pages/dialog/SampleDialog"
import SampleComponents from "./pages/components/SampleComponents"
import Test from "./pages/Test";

const router = createBrowserRouter([
  { path: "/samples/SampleMain", element: <SampleMain /> },
  { path: "/samples/SampleDialog", element: <SampleDialog /> },
  { path: "/samples/SampleComponents", element: <SampleComponents /> },
  { path: "/test", element: <Test /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
