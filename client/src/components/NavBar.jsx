import { Link, NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useTheme } from "../context/themeContext";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { styled } from "styled-components";
import UserAvatar from "./UserAvatar";;
import Switch from "./Switch";


const NavStyled = styled.nav`
  display: flex;
  grid-column: 1 / 3;
  position: relative;
  padding: 1rem 1.375rem;
  justify-content: space-between;
  color: ${props => props.$colors.textColor};
  background: ${props => props.$colors.bg_Secondary};
  box-shadow: 0 0 10px ${props => props.$colors.shadowColor};
`;
const UlStyled = styled.ul`
  gap: 2em;
  display: flex;
  align-items: center;
  & button {
    border: none;
    color: unset;
    background: unset;
  }
`;
const NavLinkStyled = styled(NavLink)`
  position: relative;
  &.active::after {
    content: '';
    bottom: 0;
    left: 50%;
    width: 60%;
    height: 2px;
    background: grey;
    border-radius: 3px;
    position: absolute;
    transform: translateX(-50%);
  }
`;
const UserButton = styled.div`
  display: flex;
  padding: 0 8px;
  cursor: pointer;
  align-items: center;
  p {
    padding: 0 8px;
  }
  .arrow {
    transition: transform .3s;
  }
  &.desplegado .arrow {
    transform: rotate(180deg)
  }
  @media screen and (max-width: 768px) {
    p, .arrow {
      display: none;
    }
  }
`;


const Desplegable = styled.div`
  right: 0;
  top: 100%;
  height: 0px;
  cursor: default;
  overflow: hidden;
  min-width: 150px;
  position: absolute;
  border-radius: 8px;
  width: max-content;
  transition: height .3s;
  background: ${props => props.$colors && props.$colors.bg_Secondary};
  box-shadow: 0 0 10px ${props => props.$colors && props.$colors.shadowColor};
  ul {
    margin: 1.25rem;
    li {
      display: flex;
      margin: 0.625rem 0;
      button, a {
        width: 100%;
        text-align: start;
      }
    }
  }
  &.desplegado {
    height: 100px;
  }
`;


function NavBar () {
  const { user, logout } = useAuth();
  const { colors } = useTheme();
  const [desplegado, setDesplegado] = useState(false);

  const changeDesplegado = () => {
    setDesplegado(!desplegado);
  }
  return (
    <NavStyled $colors={colors} >
      <UlStyled>
        <li>
          <NavLinkStyled to="/" >Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/tasks" >Tasks</NavLinkStyled>
        </li>
        <li>
          <Switch />
        </li>
      </UlStyled>
      <UlStyled>
        {!user ? 
          <>
            <li><NavLinkStyled to="/register" >Register</NavLinkStyled></li>
            <li><NavLinkStyled to="/login" >Login</NavLinkStyled></li>
          </>
        :
          <UserButton onClick={changeDesplegado} className={desplegado && 'desplegado'}>
            <UserAvatar width="40px" height="40px" color="#40A8F5"/>
            <p>{user.username}</p>
            <FaChevronDown className="arrow" />

            <Desplegable className={desplegado && 'desplegado'} $colors={colors}>
              <ul>
                <li><Link to="/profile" >Perfil</Link></li>
                <li><button onClick={logout}>Logout</button></li>
              </ul>
            </Desplegable>

          </UserButton>
        }
      </UlStyled>
    </NavStyled>
  );
}

export default NavBar;
