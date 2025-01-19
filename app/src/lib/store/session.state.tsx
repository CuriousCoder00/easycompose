import { atom } from "recoil";
import { Session } from "../types/index.types";

const sessionState = atom<Session>({
  key: "sessionState",
  default: {
    isLoggedIn: false,
    user: null,
    token: null,
  },
});

export default sessionState;
