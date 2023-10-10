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
import { useEffect, useState } from "react";
import { SolanaWallet } from "@web3auth/solana-provider";
import { useAppDispatch } from "@/store/hooks";
import {
  Web3Authentication,
  Web3Provider,
  Address,
} from "@/store/service/web3auth";

export default function Home() {
  const [web3auths, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [account, setAccoiunt] = useState<string>("");

  // console.log(web3auths);
  // console.log(provider);
  // console.log(account);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (web3auths) {
      const init = async () => {
        await dispatch(Web3Authentication(web3auths));
      };
      init();
    }
  }, [web3auths]);

  useEffect(() => {
    if (provider) {
      const init = async () => {
        await dispatch(Web3Provider(provider));
      };
      init();
    }
  }, [provider]);

  useEffect(() => {
    if (account) {
      const init = async () => {
        await dispatch(Address(account));
      };
      init();
    }
  }, [account]);

  const handle = async () => {
    try {
      const web3auth = new Web3Auth({
        clientId:
          "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ", // get it from Web3Auth Dashboard
        web3AuthNetwork: "cyan",
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.SOLANA,
          chainId: "0x3", // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
          rpcTarget: "https://api.devnet.solana.com/",
          blockExplorer: "https://explorer.solana.com",
        },
      });
      await web3auth.initModal();

      const web3authProvider = await web3auth.connect();

      if (web3authProvider) {
        const solanaWallet = new SolanaWallet(web3authProvider);
        const userAccounts = await solanaWallet.requestAccounts();
        setProvider(solanaWallet.provider);
        setAccoiunt(userAccounts[0]);
      }

      setWeb3auth(web3auth);
    } catch (error) {}
  };

  const login = () => {
    handle();
  };

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

  return (
    <div>
      <div>{unloggedInView}</div>
    </div>
  );
}
