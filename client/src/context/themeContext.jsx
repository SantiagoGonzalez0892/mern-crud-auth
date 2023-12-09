import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}


function ThemeProvider ({ children }) {
  const [darkmode, setDarkmode] = useState(false);
  const [colors, setColors] = useState({})

  let darkmodecolor = {
    bg_Primary: '#181A1B',
    bg_Secondary: '#1D2021', 
    textColor: '#CFD1D0',
    color: '#fff',
    shadowColor: '#0b0b0b', 
    bg_Transparent: 'rgba(50, 50, 50, .30)', 
    borderColor: 'rgba(255, 255, 255, .2)',
    disabled: '#606060',
  }
  let lightmodecolor = {
    bg_Primary: '#EAEAEA',
    bg_Secondary: '#FFFFFF', 
    textColor: '#525252',
    color: '#000',
    shadowColor: '#b0b0b0', 
    bg_Transparent: 'rgba(0, 0, 0, .35)', 
    borderColor: 'rgba(0, 0, 0, .2)',
    disabled: '#c9c9c9',
  }


  useEffect(() => {
    let darkmode = JSON.parse(localStorage.getItem('darkmode'));
    if (darkmode) setDarkmode(true);
    else setDarkmode(false);
  },[]);

  useEffect(() => {
    if (darkmode) setColors(darkmodecolor);
    else setColors(lightmodecolor);
  },[darkmode]);

  const changeTheme = () => {
    setDarkmode(!darkmode);
    localStorage.setItem('darkmode', JSON.stringify(!darkmode));
  }

  
  return (
    <ThemeContext.Provider value={{ changeTheme, colors, darkmode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
