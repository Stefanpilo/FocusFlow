import { useState } from "react"

import Home from "./pages/Home"

function App() {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

    return(
        <Home isDarkModeEnabled={isDarkModeEnabled} setIsDarkModeEnabled={setIsDarkModeEnabled}/>
    );
}

export default App