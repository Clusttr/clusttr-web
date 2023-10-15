"use client";
import React, { useEffect, useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
type successModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  assetName: string | null;
};

const SuccessModal = ({
  isOpen,
  onRequestClose,
  assetName,
}: successModalProps) => {
  return (
    <div>
      {isOpen && (
        <div className="flex flex-col items-center justify-center  text-center">
          <h2 className="text-center font-bold text-xl mb-4">
            Minting Successful
          </h2>
          <div className="flex justify-center items-center">
            <span className="text-[#298535] text-lg">
              <GoCheckCircleFill />
            </span>
            <span className="ml-1">{` Minted ${assetName}`}</span>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};

export default SuccessModal;
