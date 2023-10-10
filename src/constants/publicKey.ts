// import bs58 from "bs58";
// import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js";

// export const createAccount = (secretKey: string) => {
//   return Keypair.fromSecretKey(bs58.decode(secretKey));
// };

// const SECRET_KEY = “Your private key here"

// export const payer = createAccount(SECRET_KEY)

import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js";
import bs58 from "bs58";

export const createAccount = (secretKey: string) => {
  console.log(secretKey);

  return Keypair.fromSecretKey(bs58.decode(secretKey));
};

// const SECRET_KEY = "";

// export const payer = createAccount();

// export const CLUSTER_URL = clusterApiUrl("devnet");

// export const connetction = new Connection(CLUSTER_URL, "single");
