import type { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

type ModalsState = {
  isOpenViewAvatarModal: boolean;
  isOpenEditAvatarModal: boolean;
  isOpenRemoveAvatarModal: boolean;
};

type ModalsAction =
  | { type: "viewAvatarModal"; payload: boolean }
  | { type: "editAvatarModal"; payload: boolean }
  | { type: "removeAvatarModal"; payload: boolean }

type ModalsContextType = {
  state: ModalsState;
  dispatch: React.Dispatch<ModalsAction>;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

const initialState: ModalsState = {
  isOpenViewAvatarModal: false,
  isOpenEditAvatarModal: false,
  isOpenRemoveAvatarModal: false,
};

function ModalsReducer(state: ModalsState, action: ModalsAction): ModalsState {
  switch (action.type) {
    case "viewAvatarModal":
      return { ...state, isOpenViewAvatarModal: action.payload };
    case "editAvatarModal":
      return { ...state, isOpenEditAvatarModal: action.payload };
    case "removeAvatarModal":
      return { ...state, isOpenRemoveAvatarModal: action.payload };
    default:
      return state;
  }
}

export const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ModalsReducer, initialState);

  return (
    <ModalsContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = (): ModalsContextType => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error("useTabs must be used within a ModalsProvider");
  }
  return context;
};
