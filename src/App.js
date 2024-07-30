import './App.css';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRoutes}/>
    </div>
  );
}

export default App;
