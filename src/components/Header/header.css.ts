import type { Properties } from 'csstype';

type cssType = Properties<string | number, string & {}>;

export const headerRoot: cssType = {
    height: "100px",
    padding: "0 6%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(90deg, #3f4160 0%, #5e5e7d 50%, #3f4160 100%)"
}

export const logoWrapper: cssType = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px"
}

export const logoImg: cssType = {
    width: "40px",
    height: "40px"
}

export const logoName: cssType = {
    color: "white"
}

export const settingsWrapper: cssType = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px"
}

export const settingsPopupToggle: cssType = {
    width: "40px",
    height: "40px",
    //cursor: "pointer"
}

export const settingsDarkModeToggle: cssType = {
    width: "40px",
    height: "40px",
    cursor: "pointer"
}