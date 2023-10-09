"use client";
import { Web3Auth } from "@web3auth/modal";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { createAccount } from "@/constants/publicKey";

const Login = () => {
  const { web3auth, web3provider } = useAppSelector((state) => state.user);
  const [token, setToken] = useState<{ idToken: string }>();
  console.log(web3provider);

  useEffect(() => {
    try {
      const uiConsole = (...args: any[]): void => {
        const el = document.querySelector("#console>p");
        if (el) {
          el.innerHTML = JSON.stringify(args || {}, null, 2);
        }
      };

      if (web3auth) {
        const authenticateUser = async () => {
          if (!web3auth) {
            uiConsole("web3auth not initialized yet");
            return;
          }
          const idToken = await web3auth.authenticateUser();
          uiConsole(idToken);
          setToken(idToken);
        };
        authenticateUser();
        // const getPrivateKey = async () => {
        //   if (!provider) {
        //     uiConsole("provider not initialized yet");
        //     return;
        //   }
        //   const rpc = new RPC(provider);
        //   const privateKey = await rpc.getPrivateKey();
        //   uiConsole(privateKey);
        // };
        // getPrivateKey();
      }
    } catch (error) {
      console.log(error as TypeError);
    }
  }, [web3auth]);

  return <div>Login Page</div>;
};

export default Login;
