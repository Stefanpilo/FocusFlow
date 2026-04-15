import { createContext, useContext, useState, type ReactNode } from "react";

type AppContextType = {
    isDarkModeEnabled: boolean,
    setIsDarkModeEnabled: (value: React.SetStateAction<boolean>) => void
};

const defaultAppContextValue = {
    isDarkModeEnabled: false,
    setIsDarkModeEnabled: () => {}
}

export const AppContext = createContext<AppContextType>(defaultAppContextValue);

export function AppContextProvider ({ children }: {children: ReactNode}) {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(false);

    const AppContextContent = {
        isDarkModeEnabled,
        setIsDarkModeEnabled
    }

    return (
        <AppContext value={ AppContextContent}>
            {children}
        </AppContext>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}