import type React from "react";
import { useState } from "react";

const useChainSelector: React.FC = () => {
	const [openChainSelector, setopenChainSelector] = useState("");

	const openChainSelectorModal = () => {
		// open the modal window
	};

	return {
		openChainSelector,
		setopenChainSelector,
		openChainSelectorModal,
	};
};

export default useChainSelector;
