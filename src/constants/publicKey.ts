import bs58 from "bs58";
import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js";

export const createAccount = (secretKey: string) => {
  return Keypair.fromSecretKey(bs58.decode(secretKey));
};

// const SECRET_KEY = “Your private key here"

// export const payer = createAccount(SECRET_KEY)
