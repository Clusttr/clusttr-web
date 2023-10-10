import { IProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";

type IWebAuthState = {
  web3auth: Web3Auth | null | undefined;
  web3provider: IProvider | null | undefined;
  accountKey: string | null | undefined;
  user: any;
};
