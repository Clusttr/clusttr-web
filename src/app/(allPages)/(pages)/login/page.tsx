"use client";
import { Web3Auth } from "@web3auth/modal";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { createAccount } from "@/constants/publicKey";
import { IProvider } from "@web3auth/base";
import RPC from "@/app/solanaRPC";

const Login = () => {
  const { web3auth, web3provider } = useAppSelector((state) => state.user);
  const [token, setToken] = useState<{ idToken: string }>();
  const [webAuth, setWebAuth] = useState<Web3Auth | null>();
  const [webAuthProvider, setWebAuthProvider] = useState<IProvider | null>();

  // console.log("Token", token);
  // console.log("giveWebAuthPriv", webAuthProvider);

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
            const idToken = await web3auth.authenticateUser();
            uiConsole(idToken);
            setToken(idToken);
          }
        };
        authenticateUser();
      }

      if (webAuthProvider && webAuth?.connected) {
        const authenticateProvider = async () => {
          const rpc = new RPC(web3provider!);
          const privateKey = await rpc.getPrivateKey();
          uiConsole(privateKey);
          // const SECRET_KEY = privateKey;

          // // Create a key pair from the secret key
          // const keyPair = createAccount(SECRET_KEY);

          // // Get the public key from the key pair
          // const publicKey = keyPair.publicKey;

          // console.log(publicKey);

          // const key = await createAccount(privateKey);
          // console.log(key);
        };
        authenticateProvider();
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
      if (web3provider && web3auth?.connected) {
        setWebAuthProvider(web3provider);
      }
    } catch (error) {
      console.log(error as TypeError);
    }
  }, [web3auth?.connected]);

  // useEffect(() => {
  //   try {
  //     console.log("webAuth", web3auth);
  //     console.log("webAuthProv", web3provider);
  //   } catch (error) {
  //     console.log(error as TypeError);
  //   }
  // }, [string]);

  return <div>Login Page</div>;
};

export default Login;
