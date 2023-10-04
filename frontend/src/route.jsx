import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import App from "./App";
import HomeScreen from "./screens/home-screen";
import LoginScreen from "./screens/login-screen";
import RegisterScreen from "./screens/register-screen";
import ProfileScreen from "./screens/profile-screen";
import PrivateRoute from "./components/private-route";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);

export default router;
