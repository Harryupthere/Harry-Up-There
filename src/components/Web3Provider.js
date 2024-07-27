import { useAccount } from "wagmi";

const Web3ModalProvider = async () => {

  const _useAccount = useAccount();
  const data = await _useAccount.connector?.getProvider();

  return data;
};
export default Web3ModalProvider;
