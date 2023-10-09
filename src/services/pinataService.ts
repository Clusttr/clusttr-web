"use client";
// pinataService.ts

import axios from "axios";

const PINATA_API_URL = "blush-capitalist-salamander-909.mypinata.cloud";
const API_KEY = "25e37e10d0553e30623c";
const API_SECRET_KEY =
  "d952c9caecfb771a75b50cbd571f3f7383bf3575e321208dcc8b32bb94bf99a9";
const PINATA_API_GATEWAY_TOKEN =
  "nBUvzytaNTgRDZmopw6lUrrMSsgZUDOOva7Ds0T9RDCaAKY0Tsx8lUAsdYkNsabD";
// const PINATA_API_URL = "https://api.pinata.cloud/";
// const API_KEY = "YOUR_API_KEY";
// const PINATA_API_GATEWAY_TOKEN = "nBUvzytaNTgRDZmopw6lUrrMSsgZUDOOva7Ds0T9RDCaAKY0Tsx8lUAsdYkNsabD";
// const API_SECRET_KEY = "YOUR_SECRET_KEY";

// Function to upload a file to Pinata
export async function uploadFileToPinata(file: File): Promise<string | null> {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      `${PINATA_API_URL}pinning/pinFile`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: API_KEY,
          pinata_secret_api_key: API_SECRET_KEY,
        },
      }
    );

    if (response.data.IpfsHash) {
      return response.data.IpfsHash;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error uploading file to Pinata:", error);
    return null;
  }
}

// Add more functions for retrieving files, managing data, etc.
