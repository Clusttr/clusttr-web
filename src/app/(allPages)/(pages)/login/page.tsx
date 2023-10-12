"use client";
import { Web3Auth } from "@web3auth/modal";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { createAccount } from "@/constants/publicKey";
import { IProvider } from "@web3auth/base";
// import RPC from "@/app/solanaRPC";

const Login = () => {
  const { web3auth, accountKey } = useAppSelector((state) => state.user);
  const [token, setToken] = useState<{ idToken: string }>();
  const [webAuth, setWebAuth] = useState<Web3Auth | null>();
  const [webAuthProvider, setWebAuthProvider] = useState<IProvider | null>();

  console.log(accountKey, web3auth);

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
          if (webAuth && webAuth.connected) {
            const idToken = await web3auth.getUserInfo();
            console.log(idToken);

            // uiConsole(idToken);
            // setToken(idToken);
          }
        };
        authenticateUser();
      }
    } catch (error) {
      console.log(error as TypeError);
    }
  }, [webAuth, webAuthProvider]);

  useEffect(() => {
    try {
      if (web3auth && web3auth.connected) {
        setWebAuth(web3auth);
      }
    } catch (error) {
      console.log(error as TypeError);
    }
  }, [web3auth?.connected]);

  return <div>Login Page</div>;
};

export default Login;
