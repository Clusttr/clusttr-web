"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { baseUrl } from "@/constants";
import SuccessModal from "./SuccessModal";

type MintModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  tokenId: string | null;
  assetName: string | null;
  //   selectedId: any;
  //   onSubmit: (amount: number, privateKey: string) => void;
};

interface MintFormBodyType {
  assetAddress: string | null;
  amount: number;
  privateKey: string | null;
  //   publicKey: string | null;
}

const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .positive("Amount must be greater than zero")
    .integer("Amount must be an integer")
    .min(1, "Amount must be greater than zero"),
});

function MinterModal({
  isOpen,
  onRequestClose,
  tokenId,
  assetName,
}: MintModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tokenLocal, setTokenLocal] = useState<string | null>(
    localStorage.getItem("token")
  );

  const [privateKeyLocal, setPrivateKeyLocal] = useState<string | null>(
    localStorage.getItem("privateKey")
  );
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [success, setSuccess] = useState<boolean>(false);
  // const [amountMinted, setAmountMinted] = useState<number>(0);

  // Created a state to manage the Success Modal visibility
  const [IsSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  //   const tokenIdAdrress = "MfitNBze2L8GdMBzuarup5Lffy1sWyJJDdnxSMS6cr4";
  // useEffect(() => {
  //   const privateKey = localStorage.getItem("privateKey");
  //   if (privateKey) {
  //     setPrivateKeyLocal(privateKey);
  //   }
  // }, []);

  const initialValues: MintFormBodyType = {
    assetAddress: "",
    amount: 0,
    privateKey: "",
    //   publicKey: "",
  };

  useEffect(() => {
    if (IsSuccessModalOpen) {
      console.log(success);

      setTimeout(() => {
        onRequestClose();
        setIsSuccessModalOpen(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IsSuccessModalOpen]);

  const onSubmit = async (values: MintFormBodyType) => {
    setIsSubmitting(true);
    // console.log(values);
    // setAmountMinted(values.amount);

    try {
      values.assetAddress = tokenId;
      values.privateKey = privateKeyLocal;
      // console.log(values);
      const response = await axios.post(`${baseUrl}/asset/mint`, values, {
        // method: "POST",
        headers: {
          Authorization: `Bearer ${tokenLocal}`,
          "Content-Type": "application/json",
        },
      });
      response.data;
      // console.log(response.data);
      //   use returned data
      setSuccess(true);
      setIsSuccessModalOpen(true);
      //   onRequestClose();
    } catch (error: any) {
      console.error("Error Minting:", error);
      const errmes = error?.message;
      setErrorMessage(errmes);
    }
    setIsSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  if (!isOpen) {
    return null; // Do not render the modal if it's closed
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div
        className="bg-gray-500 bg-opacity-50 absolute top-0 left-0 w-full h-full"
        // onClick={onRequestClose}
      ></div>
      <div className="bg-white rounded-lg p-8 z-10">
        {!IsSuccessModalOpen && (
          <div>
            <h2 className="text-xl mb-4 font-bold">Mint Asset({assetName})</h2>
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="amount" className="block">
                  Amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full border p-2 rounded"
                />
                {formik.errors.amount && formik.touched.amount && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.amount}
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className={`px-4 py-2 rounded bg-blue-500 text-white ${
                    isSubmitting ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Minting..." : "Mint Asset"}
                </button>
                <button
                  onClick={onRequestClose}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <div>
          <SuccessModal
            isOpen={IsSuccessModalOpen}
            onRequestClose={() => setIsSuccessModalOpen(false)}
            assetName={assetName}
          />
        </div>
      </div>
    </div>
  );
}

export default MinterModal;
