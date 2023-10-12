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
import { SolanaWalletConnectorPlugin } from "@web3auth/solana-wallet-connector-plugin";
import { SolflareAdapter } from "@web3auth/solflare-adapter";
import { useEffect, useState } from "react";
import { createAccount } from "@/constants/publicKey";
import { SolanaWallet } from "@web3auth/solana-provider";
import { PrivateRoute } from "@/components/private";

// import RPC from "../../solanaRPC";
// import UploadToPinata from "@/components/UploadToPinata";

// import { useDispatch } from "react-redux";
// import { setUser, selectUser } from "@/store/slice/userSlice";

export default function PersistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  PrivateRoute();

  return <div>{children}</div>;
}
