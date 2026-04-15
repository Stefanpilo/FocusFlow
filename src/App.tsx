import Home from "./pages/Home"
import { AppContextProvider }  from "./AppContext.js";

function App() {
    return(
        <AppContextProvider>
            <Home />
        </AppContextProvider>
    );
}

export default App