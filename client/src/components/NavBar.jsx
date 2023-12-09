import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { styled } from "styled-components";
import { useTheme } from "../context/themeContext";
import Switch from "./Switch";
import Avatar1 from "./avatars/Avatar1";
import Avatar2 from "./avatars/Avatar2";
import Avatar3 from "./avatars/Avatar3";
import Avatar4 from "./avatars/Avatar4";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import UserAvatar from "./UserAvatar";;


const NavStyled = styled.nav`
  background: ${({$colors}) => $colors.bg_Secondary};
  color: ${({$colors}) => $colors.textColor};
  padding: 16px 22px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px ${({$colors}) => $colors.shadowColor};
`;
const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  & button {
    border: none;
    background: unset;
    color: unset;
  }
`;
const NavLinkStyled = styled(NavLink)`
  position: relative;
  padding: 3px 8px;

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
  position: relative;

  p {
    padding: 0 8px;
  }

  .arrow {
    transition: transform .3s;
  }
  &.desplegado .arrow {
    transform: rotate(180deg)
  }
`;

const Desplegable = styled.div`
  background: ${({$colors}) => $colors && $colors.bg_Secondary};
  box-shadow: 0 0 10px ${({$colors}) => $colors && $colors.shadowColor};
  width: 100%;
  height: 0px;
  overflow: hidden;
  border-radius: 8px;
  transition: height .3s;
  cursor: default;


  position: absolute;
  top: 57px;
  left: 0;

  ul {
    margin: 20px;

    li {
      margin: 10px 0;
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
        {!user ? (
          <>
            <li><NavLinkStyled to="/register" >Register</NavLinkStyled></li>
            <li><NavLinkStyled to="/login" >Login</NavLinkStyled></li>
          </>
        ) : (
          <>
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
          </>
        )}
              </UlStyled>
    </NavStyled>
  );
}

export default NavBar;