import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Main from "../Main/Main";
import NotFound from "../Partials/NotFound";

const allRoutes = [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/dashbord",
    element: <Main />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default allRoutes