import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = () => {
  const router = useRouter();

  useEffect(() => {
    try {
      let token = localStorage.getItem("openlogin_store");

      let authToken;
      if (token) {
        authToken = JSON.parse(token);
      }

      //   console.log("private", authToken);

      if (!authToken) {
        return router.push("/");
      }
    } catch (error) {
      console.log("Error: ", error as TypeError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { PrivateRoute };
