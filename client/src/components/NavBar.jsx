import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { styled } from "styled-components";
import { useTheme } from "../context/themeContext";
import Switch from "./Switch";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import UserAvatar from "./UserAvatar";;


const NavStyled = styled.nav`
  padding: 1rem 1.375rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px ${props => props.$colors.shadowColor};
  background: ${props => props.$colors.bg_Secondary};
  color: ${props => props.$colors.textColor};
  position: relative;
`;


const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 2em;
  & button {
    border: none;
    background: unset;
    color: unset;
  }
`;


const NavLinkStyled = styled(NavLink)`
  position: relative;
  &.active::after {
    content: '';
    width: 60%;
    height: 2px;
    border-radius: 3px;
    background: grey;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;


const UserButton = styled.div`
  padding: 0 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  // position: relative;
  p {
    padding: 0 8px;
  }
  .arrow {
    transition: transform .3s;
  }
  &.desplegado .arrow {
    transform: rotate(180deg)
  }
  @media screen and (max-width: 900px) {
    p, .arrow {
      display: none;
    }
  }
`;


const Desplegable = styled.div`
  background: ${props => props.$colors && props.$colors.bg_Secondary};
  box-shadow: 0 0 10px ${props => props.$colors && props.$colors.shadowColor};
  width: max-content;
  min-width: 150px;
  height: 0px;
  overflow: hidden;
  border-radius: 8px;
  transition: height .3s;
  cursor: default;
  position: absolute;
  top: 100%;
  right: 0;
  ul {
    margin: 1.25rem;
    li {
      margin: 0.625rem 0;
      display: flex;
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
