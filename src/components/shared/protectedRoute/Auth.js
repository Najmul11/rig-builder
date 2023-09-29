import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Auth = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const { data: session } = useSession();
  const router = useRouter();

  if (!user && !session) {
    if (!session) {
      router.push("/");
    } else {
      router.push("/account/login");
    }
    return null;
  }

  return children;
};

export default Auth;
