import { useReducer, useEffect } from "react";
import { UserContext } from "./UserContext";

const initialState = {
  isLogin: false,
  user: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogin: true,
        user: {
          username: action.payload.username,
          profile_photo: action.payload.profile_photo,
        },
      };

    case "LOGOUT":
      return {
        isLogin: false,
        user: null,
      };

    case "EDIT":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const initializer = () => {
    const saved = localStorage.getItem("user");
    // const isLogin
    return saved ? JSON.parse(saved) : initialState;
  };

  const [state, dispatch] = useReducer(userReducer, initialState, initializer);

  // sync localStorage
  useEffect(() => {
    if (state) localStorage.setItem("user", JSON.stringify(state));
    else localStorage.removeItem("user");
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
