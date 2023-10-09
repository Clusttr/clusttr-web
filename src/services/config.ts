export const PINATA_API_KEY = "25e37e10d0553e30623c";
export const PINATA_API_SECRET_KEY =
  "d952c9caecfb771a75b50cbd571f3f7383bf3575e321208dcc8b32bb94bf99a9";
export const PINATA_JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiOWFiNDJlYy04OTdlLTQ1ODAtYTllMC02YzFkYzZkZmEwMDIiLCJlbWFpbCI6ImNoYXJsZXNvcmloMDA3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI1NDllZmE1NzgyMDBjOTgzYjYzZCIsInNjb3BlZEtleVNlY3JldCI6ImQzZWM0YmJmMGU3YmY5ZTY5MmEyOTJlOWE2NTM4MWZiN2MzZTk4Yzg1OGE0NzQ2MjJiOWIwNTI3M2JlMDRmMzAiLCJpYXQiOjE2OTY2NjExMjl9.rkAoLnfzdt31EZAjWrXufIgYi1qL6h-ki3Ly_chBIjE";

export const GATEWAY_JWT =
  "nBUvzytaNTgRDZmopw6lUrrMSsgZUDOOva7Ds0T9RDCaAKY0Tsx8lUAsdYkNsabD";
export const IPFS_GATEWAY = "blush-capitalist-salamander-909";

export const readHeader = {
  "Content-Type": "application/json",
};
export const getHeader = {
  headers: {
    pinata_api_key: PINATA_API_KEY,
    pinata_secret_api_key: PINATA_API_SECRET_KEY,
  },
};
export const sendJsonHeader = {
  headers: {
    "Content-Type": "application/json",
    pinata_api_key: PINATA_API_KEY,
    pinata_secret_api_key: PINATA_API_SECRET_KEY,
  },
};
