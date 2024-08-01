import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import appStore from "./utils/store/store";

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
      <Provider store={appStore}>
        <RouterProvider router={appRoutes}/>
      </Provider>
    </div>
  );
}

export default App;
