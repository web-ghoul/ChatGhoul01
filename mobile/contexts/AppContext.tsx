import type { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

type AppState = {
    chosenChatTheme: string
    chosenAvatar?: string
    chosenMessages: { [key: string]: string | undefined }
    chosenMsgsOwnLength: number;
    chosenMessagesLength: number;
    openChatSearch: boolean;
};

type AppAction =
    | { type: "chosenChatTheme"; payload: string }
    | { type: "chosenAvatar"; payload?: string }
    | { type: "chosenMessages"; payload: { [key: string]: string | undefined } }
    | { type: "chosenMsgsOwnLength"; payload: number }
    | { type: "chosenMessagesLength"; payload: number }
    | { type: "openChatSearch"; payload: boolean }

type AppContextType = {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialState: AppState = {
    chosenChatTheme: '0',
    chosenAvatar: undefined,
    chosenMessages: {},
    chosenMsgsOwnLength: 0,
    chosenMessagesLength: 0,
    openChatSearch: false,
};

function AppReducer(state: AppState, action: AppAction): AppState {
    switch (action.type) {
        case "chosenChatTheme":
            return { ...state, chosenChatTheme: action.payload };
        case "chosenAvatar":
            return { ...state, chosenAvatar: action.payload };
        case "chosenMessages":
            return { ...state, chosenMessages: action.payload };
        case "chosenMsgsOwnLength":
            return { ...state, chosenMsgsOwnLength: action.payload };
        case "chosenMessagesLength":
            return { ...state, chosenMessagesLength: action.payload };
        case "openChatSearch":
            return { ...state, openChatSearch: action.payload };
        default:
            return state;
    }
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useTabs must be used within a ModalsProvider");
    }
    return context;
};
