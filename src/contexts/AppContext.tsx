import { createContext, useContext, useReducer } from "react";

export const ACTIONS = {
  EXTRACT_BEGIN: 'EXTRACT_BEGIN',
  SET_EXTRACTED: 'SET_EXTRACTED',
}

function reducer(state: any, action: { type: any; payload: any; }) {
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
}
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    )
}

export const useAppContext = () => {
  return useContext(AppContext);
};