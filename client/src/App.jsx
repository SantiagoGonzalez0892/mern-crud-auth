import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/authContext";
import NavBar from "./components/NavBar";
import { AuthenticatedRoutes, UnathenticatedRoutes } from "./pages/ProtectedRoutes";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from './pages/LoginPage'
import TaskPage from "./pages/TaskPage/TaskPage";
import {useTheme} from "./context/themeContext";
import { styled } from "styled-components";
import Home from "./pages/Home/Home";

const AppComponent = styled.div`
  min-height: 100vh;
  color: ${props => props.$colors.textColor};
  background: ${props => props.$colors.bg_Primary};

  display: grid;
  grid-template-rows: 72px 1fr;
  grid-template-columns: 1fr minmax(280px, 350px);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr minmax(280px, 300px);
  }
`;


function App() {
  const { colors } = useTheme();

  return (
    <AppComponent $colors={colors}>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
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
    </AppComponent>
  );
}

export default App
