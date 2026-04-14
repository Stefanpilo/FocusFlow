import { useState } from "react";

import logo from "../../assets/logo.svg";
import settingsIcon from "../../assets/settings.svg";
import darkModeIcon from "../../assets/dark_mode.svg";
import lightModeIcon from "../../assets/light_mode.svg";

import * as headerStyle from "./header.css.ts"

function HeaderComponent({ isDarkModeEnabled, setIsDarkModeEnabled }) {

  return (
    <div style={headerStyle.headerRoot}>
      {/* logo */}
      <div style={headerStyle.logoWrapper}>
        <img src={logo} alt="logo" style={headerStyle.logoImg}/>
        <p style={headerStyle.logoName}>FocusFlow</p>
      </div>
      {/* settings */}
      <div style={headerStyle.settingsWrapper}>
        <img src={settingsIcon} alt="settingsPopupToggle" style={headerStyle.settingsPopupToggle}/>
        <img src={isDarkModeEnabled ? lightModeIcon : darkModeIcon} alt="darkModeToggle" style={headerStyle.settingsDarkModeToggle} onClick={() => setIsDarkModeEnabled(!isDarkModeEnabled)}/>
      </div>
    </div>
  )
}

export default HeaderComponent
