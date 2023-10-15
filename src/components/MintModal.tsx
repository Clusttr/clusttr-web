"use client";

import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

type MintModalTypes = {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (amount: string, privateKey: string) => void;
};

function MintModal({ isOpen, onRequestClose, onSubmit }: MintModalTypes) {
  const [amount, setAmount] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handlePrivateKeyChange = (e) => setPrivateKey(e.target.value);

  const handleSubmit = () => {
    // Pass the input values to the onSubmit callback
    onSubmit(amount, privateKey);

    // Clear the input fields and close the modal
    setAmount("");
    setPrivateKey("");
    onRequestClose();
  };

  return (
    <div isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Enter Minting Information</h2>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div>
        <label htmlFor="privateKey">Private Key:</label>
        <input
          type="text"
          id="privateKey"
          value={privateKey}
          onChange={handlePrivateKeyChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MintModal;
