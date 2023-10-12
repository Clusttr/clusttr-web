import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js";
import bs58 from "bs58";

export const createAccount = (secretKey: string) => {
  try {
    console.log(secretKey);

    return Keypair.fromSecretKey(bs58.decode(secretKey));
  } catch (error) {
    console.log(error as TypeError);
  }
};
