import sessionState from "@/lib/store/session.state";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useSession = () => {
  const [session, setSession] = useRecoilState(sessionState);

  useEffect(() => {
    const token = localStorage.getItem("easy_compose_token");
    const sessionData = localStorage.getItem("easy_compose_session");
    if (!token) {
      localStorage.removeItem("easy_compose_session");
    }
    if (sessionData) {
      setSession(JSON.parse(sessionData));
    } else {
      setSession({
        token: null,
        user: {
          id: "",
          email: "",
          name: "",
        },
      });
    }
  }, []);

  return {
    session,
    setSession,
  };
};
