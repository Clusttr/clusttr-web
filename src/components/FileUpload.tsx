"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  // const [idTokenLocal, setIdTokenLocal] = useState<string | null>(
  //   localStorage.getItem("idToken")
  // );

  // const readFile = async (e: any) => {
  //   setFile(e.target.files[0]);
  //   setFileName(e.target.files[0].name);
  // };

  // const uploadFile = async () => {
  //   const formData = new FormData();

  //   formData.append("file", file, fileName);

  //   const metadata = JSON.stringify({ name: fileName });
  //   formData.append("pinataMetadata", metadata);

  //   try {
  //     const res = await axios.post(
  //       "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //       formData,
  //       {
  //         maxBodyLength: Infinity,
  //         headers: {
  //           "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
  //           pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
  //           pinata_secret_api_key:
  //             process.env.NEXT_PUBLIC_PINATA_API_SECRET_KEY,
  //         },
  //       }
  //     );

  //     const tokenRes = await createAssetToken(res.data);
  //     alert("Token created successfully");
  //   } catch (err) {
  //     console.log(err);
  //     alert("We could not create token. Please try again");
  //   }
  // };

  // const createAssetToken = async ({ IpfsHash }: { IpfsHash: string }) => {
  //   if (!IpfsHash) return null; //TODO: throw error

  //   try {
  //     const data = {
  //       name: "Lotus ex suite",
  //       symbol: "LEX",
  //       uri: `https://gateway.pinata.cloud/ipfs/${IpfsHash}`,
  //       maxSupply: 999,
  //     };

  //     const res = await axios.post(
  //       "https://clusttr.up.railway.app/asset/create",
  //       data,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${idTokenLocal}`,
  //           // Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLUSTTR_JWT_TOKEN}`,
  //         },
  //       }
  //     );

  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div style={{ marginTop: 300, marginBottom: 100, marginLeft: 50 }}>
      {/* <input type="file" onChange={(e) => readFile(e)} /> */}
      <button>Upload File</button>
      {/* <button onClick={uploadFile} disabled={!file}>
        Upload File
      </button> */}
    </div>
  );
};

export default FileUpload;
