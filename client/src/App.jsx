import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/authContext";
import NavBar from "./components/NavBar";
import { AuthenticatedRoutes, UnathenticatedRoutes } from "./pages/ProtectedRoutes";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from './pages/LoginPage'
import TaskPage from "./pages/TaskPage/TaskPage";
import {useTheme} from "./context/themeContext";
import { styled } from "styled-components";

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
  @media screen and (max-width: 992px) {
    // grid-template-columns: 1fr;
  }
`;



function Home () {


  return (
   
    <form className="sliding-form" onSubmit={(e) => e.preventDefault()}>
  <div className="form-section active">
    <h2>Ingresa tu email y contraseña</h2>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required/>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required/>
    <button className="next-section">Siguiente</button>
  </div>
  <div className="form-section">
    <h2>Elige un avatar</h2>
    <div className="avatars">
      <div className="avatar">Avatar 1</div>
      <div className="avatar">Avatar 2</div>
      <div className="avatar">Avatar 3</div>
    </div>
    <button className="prev-section">Anterior</button>
  </div>
</form>  );
}


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
