import type { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

type FormsState = {
    loading: boolean
};

type FormsAction =
    | { type: "loading"; payload: boolean }

type FormsContextType = {
    state: FormsState;
    dispatch: React.Dispatch<FormsAction>;
};

const FormsContext = createContext<FormsContextType | undefined>(undefined);

const initialState: FormsState = {
    loading: false,
};

function FormsReducer(state: FormsState, action: FormsAction): FormsState {
    switch (action.type) {
        case "loading":
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}

export const FormsProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(FormsReducer, initialState);

    return (
        <FormsContext.Provider value={{ state, dispatch }}>
            {children}
        </FormsContext.Provider>
    );
};

export const useForms = (): FormsContextType => {
    const context = useContext(FormsContext);
    if (!context) {
        throw new Error("useTabs must be used within a ModalsProvider");
    }
    return context;
};
