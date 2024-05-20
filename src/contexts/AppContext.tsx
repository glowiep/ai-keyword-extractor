import { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";

export const ACTIONS = {
  EXTRACT_BEGIN: 'EXTRACT_BEGIN',
  SET_EXTRACTED: 'SET_EXTRACTED',
  SET_INPUT: 'SET_INPUT',
}

interface State {
  keywords: string[];
  isLoading: boolean;
  isExtracted: boolean;
  showKeywords: boolean;
  input: string;
}

interface Action {
  type: string;
  payload?: any;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ACTIONS.EXTRACT_BEGIN:
      return {
        ...state,
        isLoading: true,
        isExtracted: true
      }
    case ACTIONS.SET_EXTRACTED:
      return {
        ...state,
        isLoading: false,
        keywords: [action.payload]
      }
    case ACTIONS.SET_INPUT:
      return {
        ...state,
        input: action.payload
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const INITIAL_STATE = {
  keywords: [],
  isLoading: false,
  isExtracted: false,
  showKeywords: false,
  input: '',
}

interface AppContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);


interface AppProviderProps {
  children: ReactNode;  // for anything that can be rendered in JSX
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    )
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context;
};