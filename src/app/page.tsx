"use client";
import {
  ClusttrWorks,
  FirstToKnow,
  Footer,
  Hero,
  InfoSection,
  Navbar,
} from "@/components";
import Image from "next/image";
import { CHAIN_NAMESPACES, IProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { SlopeAdapter } from "@web3auth/slope-adapter";
// Plugins
import { SolanaWalletConnectorPlugin } from "@web3auth/solana-wallet-connector-plugin";
// Adapters
import { SolflareAdapter } from "@web3auth/solflare-adapter";
import { use, useEffect, useState } from "react";

import RPC from "./solanaRPC";
// import UploadToPinata from "@/components/UploadToPinata";

// import { useDispatch } from "react-redux";
// import { setUser, selectUser } from "@/store/slice/userSlice";
const bs58 = require('bs58');
import { Keypair } from "@solana/web3.js"

const clientId =
  "BEglQSgt4cUWcj6SKRdu5QkOXTsePmMcusG5EAoyjyOYKlVRjIF1iCNnMOTfpzCiunHRrMui8TIwQPXdkQ8Yxuk"; // get from https://dashboard.web3auth.io

export default function Home() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const web3authInstance = new Web3Auth({
  //         clientId,
  //         chainConfig: {
  //           chainNamespace: CHAIN_NAMESPACES.SOLANA,
  //           chainId: "0x3", // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
  //           rpcTarget: "https://api.devnet.solana.com", // This is the public RPC we have added, please pass on your own endpoint while creating an app
  //         },
  //         // uiConfig refers to the whitelabeling options, which is available only on Growth Plan and above
  //         // Please remove this parameter if you're on the Base Plan
  //         uiConfig: {
  //           appName: "W3A",
  //           // appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
  //           theme: {
  //             primary: "red",
  //           },
  //           mode: "dark",
  //           logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
  //           logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
  //           defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
  //           loginGridCol: 3,
  //           primaryButton: "externalLogin", // "externalLogin" | "socialLogin" | "emailLogin"
  //         },
  //         web3AuthNetwork: "cyan",
  //       });

  //       // adding solana wallet connector plugin

  //       const torusPlugin = new SolanaWalletConnectorPlugin({
  //         torusWalletOpts: {},
  //         walletInitOptions: {
  //           whiteLabel: {
  //             name: "Whitelabel Demo",
  //             theme: { isDark: true, colors: { torusBrand1: "#00a8ff" } },
  //             logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
  //             logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
  //             topupHide: true,
  //             defaultLanguage: "en",
  //           },
  //           enableLogging: true,
  //         },
  //       });
  //       const value = await web3authInstance.addPlugin(torusPlugin);

  //       const slopeAdapter = new SlopeAdapter({
  //         clientId,
  //       });
  //       web3authInstance.configureAdapter(slopeAdapter);

  //       setWeb3auth(web3authInstance);

  //       await web3authInstance.initModal();
  //       setProvider(web3authInstance.provider);

  //       if (web3authInstance.connectedAdapterName) {
  //         setLoggedIn(true);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   init();
  // }, []);


  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId, 
          web3AuthNetwork: "cyan",
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.SOLANA,
            chainId: "0x3",
            rpcTarget: "https://api.devnet.solana.com",
          },
        });

        setWeb3auth(web3auth)
        await web3auth.initModal()

        if (web3auth?.provider) {
          setProvider(web3auth.provider)
        } else {
          console.log("no provider set")
        }
  
      } catch (error) {
        console.log({error})
        console.log(error)
      }
    }

    init()

  }, [])

  const login = async () => {
      if (!web3auth) {
        console.log("login: web3auth not initialized yet")
        return
      }
      const web3authProvider = await web3auth.connect()
      setProvider(provider)

      const user = await web3auth.authenticateUser()
      const idToken = user.idToken
      console.log({user})
      console.log({idToken})
      await getPrivateKey()
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet")
      return
    }
    const rpc = new RPC(provider)
    const privateKey = await rpc.getPrivateKey()
    uiConsole(privateKey)
    console.log({privateKey})

    const account = await rpc.getAccounts() // the first item on this list the public key we have been looking for
    console.log({account})

    const privateKeyBinary = Uint8Array.from(Buffer.from(privateKey, 'hex'))
    const keypair = Keypair.fromSecretKey(privateKeyBinary)
    const publicKey = keypair.publicKey
    console.log({publicKey: publicKey.toString(), ba58: publicKey.toBase58()})
    console.log({keypair})
  }

  function uiConsole(...args: any[]): void {
    const el = document.querySelector("#console>p");
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
    }
  }

  // const authenticateUser = async () => {
  //   console.log(web3auth);

  //   if (!web3auth) {
  //     uiConsole("web3auth not initialized yet");
  //     return;
  //   }
  //   const idToken = await web3auth.authenticateUser();
  //   uiConsole(idToken);
  // };

  // const getUserInfo = async () => {
  //   if (!web3auth) {
  //     uiConsole("web3auth not initialized yet");
  //     return;
  //   }
  //   const user = await web3auth.getUserInfo();
  //   uiConsole(user);

  //   console.log(user);

  //   // Dispatch the user information to Redux
  //   // if (user) {
  //   //   dispatch(setUser(user));
  //   // }
  // };

  const logout = async () => {
    if (!web3auth) {
      // uiConsole("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
    setLoggedIn(false);
  };

  // const getAccounts = async () => {
  //   if (!provider) {
  //     uiConsole("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const address = await rpc.getAccounts();
  //   uiConsole(address);
  // };

  // const getBalance = async () => {
  //   if (!provider) {
  //     uiConsole("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const balance = await rpc.getBalance();
  //   uiConsole(balance);
  // };

  // const sendTransaction = async () => {
  //   if (!provider) {
  //     uiConsole("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const receipt = await rpc.sendTransaction();
  //   uiConsole(receipt);
  // };

  // const signMessage = async () => {
  //   if (!provider) {
  //     uiConsole("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const signedMessage = await rpc.signMessage();
  //   uiConsole(signedMessage);
  // };

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

  const loggedInView = (
    <>
      <div className="flex-container">
        {/* <div>
          <button onClick={getUserInfo} className="card">
            Get User Info
          </button>
        </div>
        <div>
          <button onClick={authenticateUser} className="card">
            Get ID Token
          </button>
        </div>
        <div>
          <button onClick={getAccounts} className="card">
            Get Account
          </button>
        </div>
        <div>
          <button onClick={getBalance} className="card">
            Get Balance
          </button>
        </div>
        <div>
          <button onClick={sendTransaction} className="card">
            Send Transaction
          </button>
        </div>
        <div>
          <button onClick={signMessage} className="card">
            Sign Message
          </button>
        </div>
        <div>
          <button onClick={getPrivateKey} className="card">
            Get Private Key
          </button>
        </div>
        <div>
          <button onClick={logout} className="card">
            Log Out
          </button>
        </div> */}
      </div>
      {/* <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}></p>
      </div> */}
    </>
  );

  // return (
  //   <main className="overflow-hidden">
  //     <Hero />
  //     <InfoSection />
  //     <ClusttrWorks />
  //     <FirstToKnow />
  //   </main>
  // );

  const unloggedInView = (
    <main className="overflow-hidden">
      <Navbar login={login} />
      <Hero />
      <InfoSection />
      <ClusttrWorks />
      <FirstToKnow />
      <Footer />
    </main>
  );

  // const unloggedInView = (
  //   <button onClick={login} className="card">
  //     Login
  //   </button>
  // );

  return (
    <div>
      <div>{loggedIn ? loggedInView : unloggedInView}</div>
    </div>
  );
}
