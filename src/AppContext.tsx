import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";

// Stato dell'app: aggiungere qui nuovi campi del Context
export type AppState = {
    isDarkModeEnabled: boolean;
    // es: user?: User, settings?: Settings, ecc.
};

type AppContextType = AppState & {
    setAppState: (value: React.SetStateAction<AppState>) => void;
};

const defaultAppState: AppState = {
    isDarkModeEnabled: false
};

const defaultAppContextValue: AppContextType = {
    ...defaultAppState,
    setAppState: () => {}
};

export const AppContext = createContext<AppContextType>(defaultAppContextValue);

export function AppContextProvider({ children }: { children: ReactNode }) {
    const [appState, setAppState] = useState<AppState>(() => {
        try {
            if (typeof window === "undefined") return defaultAppState;
            const stored = localStorage.getItem("FocusFlow");
            return stored ? (JSON.parse(stored) as AppState) : defaultAppState;
        } catch {
            return defaultAppState;
        }
    });

    useEffect(() => {
        try {
            if (typeof window === "undefined") return;
            localStorage.setItem("FocusFlow", JSON.stringify(appState));
        } catch {}
    }, [appState]);

    const value = useMemo(() => ({ ...appState, setAppState }), [appState]);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}