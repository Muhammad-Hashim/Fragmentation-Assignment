import type React from "react";
import { useState } from "react";

// import { Container } from './styles';

const useWallet: React.FC = () => {
	const [walletAddress, setWalletAddress] = useState<string | null>("");
	const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
	const [walletBalance, setWalletBalance] = useState<number>(0);
	const [isBalanceError, setIsBalanceError] = useState<boolean>(false);
	const [walletChain, setWalletChain] = useState<string | null>("");
	const [chains, setChains] = useState<string[] | null>([]);

	const openChainModal = () => {
		// here is where the wallet will be opened and the wallet  will be connected
	};

	const openConnectModal = () => {
		// here i am assuming that the wallet is connected to the server and the wallet is connected
	};

	return {
		walletAddress,
		setWalletAddress,
		isWalletConnected,
		setIsWalletConnected,
		walletBalance,
		setWalletBalance,
		isBalanceError,
		setIsBalanceError,
		walletChain,
		setWalletChain,
		chains,
		setChains,
		openChainModal,
		openConnectModal,
	};
};

export default useWallet;
