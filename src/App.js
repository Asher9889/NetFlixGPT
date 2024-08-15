import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import appStore from "./utils/store/store";
import Browse from "./components/Browse";
import Movie from "./components/Movie";
import GPT from "./Pages/GPT";
import SecuredRoutesPage from "./Pages/SecuredRoutesPage";

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
      element: <SecuredRoutesPage />,
      children: [
        {
        path: "/browse/:type/video/:index",
        element: <Movie />
        }
      ]
    },
        {
          path: "/askgpt",
          element: <GPT />
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
