import {
  createBrowserRouter,
} from "react-router-dom";

import Login from "./page/login/login"
import Manage from "./page/manage/manage"
import NotFound from "./page/NotFound/NotFound"
const routes = createBrowserRouter([
  {
    path: '/manageuser',
    element: <Manage />,

  },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default routes
