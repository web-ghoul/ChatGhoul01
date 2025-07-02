import type { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

type ModalsState = {
  isOpenViewAvatarModal: boolean;
  isOpenEditAvatarModal: boolean;
  isOpenRemoveAvatarModal: boolean;
  isOpenChooseChatThemeModal: boolean;
  isOpenChooseAvatarModal: boolean;
  isOpenDeleteMessagesModal: boolean;
};

type ModalsAction =
  | { type: "viewAvatarModal"; payload: boolean }
  | { type: "editAvatarModal"; payload: boolean }
  | { type: "removeAvatarModal"; payload: boolean }
  | { type: "chooseChatThemeModal"; payload: boolean }
  | { type: "chooseAvatarModal"; payload: boolean }
  | { type: "deleteMessagesModal"; payload: boolean }

type ModalsContextType = {
  state: ModalsState;
  dispatch: React.Dispatch<ModalsAction>;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

const initialState: ModalsState = {
  isOpenViewAvatarModal: false,
  isOpenEditAvatarModal: false,
  isOpenRemoveAvatarModal: false,
  isOpenChooseChatThemeModal: false,
  isOpenChooseAvatarModal: false,
  isOpenDeleteMessagesModal: false,
};

function ModalsReducer(state: ModalsState, action: ModalsAction): ModalsState {
  switch (action.type) {
    case "viewAvatarModal":
      return { ...state, isOpenViewAvatarModal: action.payload };
    case "editAvatarModal":
      return { ...state, isOpenEditAvatarModal: action.payload };
    case "removeAvatarModal":
      return { ...state, isOpenRemoveAvatarModal: action.payload };
    case "chooseChatThemeModal":
      return { ...state, isOpenChooseChatThemeModal: action.payload };
    case "chooseAvatarModal":
      return { ...state, isOpenChooseAvatarModal: action.payload };
    case "deleteMessagesModal":
      return { ...state, isOpenDeleteMessagesModal: action.payload };
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
