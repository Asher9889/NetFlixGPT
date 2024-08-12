import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import appStore from "./utils/store/store";
import Browse from "./Pages/Browse";
import Movie from "./components/Movie";

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
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
        path: "/browse/:type/video/:index",
        element: <Movie />
        }
    ]
    }
])

function App() {
  return (
    <div className="overflow-x-hidden">
      <Provider store={appStore}>
        <RouterProvider router={appRoutes}/>
      </Provider>
    </div>
  );
}

export default App;
