import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ShowMarks from "./components/ShowMarks";

function App() {

  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            token
            ? <Navigate to="/dashboard" />
            : <Navigate to="/signup" />
          }
        />

        <Route
          path="/signup"
          element={<Signup />}
        />
  

    <Route
      path="/showmarks"
      element={<ShowMarks/>}

    />
 
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;