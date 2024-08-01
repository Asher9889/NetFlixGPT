import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";

const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <SignIn />
    },
    {
      path: "/signup",
      element: <SignUp />
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
