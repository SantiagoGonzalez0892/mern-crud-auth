import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/authContext";
import NavBar from "./components/NavBar";
import { AuthenticatedRoutes, UnathenticatedRoutes } from "./pages/ProtectedRoutes";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from './pages/LoginPage'
import TaskPage from "./pages/TaskPage/TaskPage";
import {useTheme} from "./context/themeContext";



function App() {
  const { colors } = useTheme();

  return (
    <div style={{background: colors.bg_Primary, color: colors.textColor, minHeight: '100vh'}}>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route element={<UnathenticatedRoutes />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<AuthenticatedRoutes />}>
              <Route path="/tasks" element={<TaskPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App
