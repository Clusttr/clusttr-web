"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BsHouseAddFill } from "react-icons/bs";
import { BsHouseDownFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [toMint, setToMint] = useState(false);
  const [toAdd, setToAdd] = useState(false);
  const [publicKeyLocal, setPublicKeyLocal] = useState<string | null>("");

  useEffect(() => {
    const publicKey = localStorage.getItem("publicKey");
    if (publicKey) {
      setPublicKeyLocal(publicKey);
    }
  }, []);

  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleChangeMint = () => {
    router.push("/dashboard/mint");
    setToMint(true);
    setToAdd(false);
  };
  const handleChangeToAdd = () => {
    router.push("/dashboard/upload");
    setToAdd(true);
    setToMint(false);
  };
  // const handleChangeToAdd = () => {
  //   router.push('/dashboard/addasset');
  //   setToAdd(true)
  //   setToMint(false)
  // };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside
        className={`h-screen w-1/5 bg-gray-600 p-4 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        {/* Sidebar Content Goes Here */}
        <div className="flex justify-center mb-14">
          <Image
            src={"/logowhite.svg"}
            width={110}
            height={25}
            alt="Clusttr Logo"
            className="py-4"
          />
        </div>
        <div
          className={`flex items-center mb-5 hover:bg-gray-900 rounded-lg p-1.5 ${
            toMint ? "bg-gray-800" : ""
          }`}
        >
          <button
            className="flex gap-x-2 items-center"
            onClick={handleChangeMint}
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white text-2xl">
              <BsHouseDownFill />
            </span>
            <span className="text-white ml-2 text-lg font-bold">
              Mint Asset
            </span>
          </button>
        </div>

        <div
          className={`flex items-center hover:bg-gray-900 rounded-lg p-1.5 ${
            toAdd ? "bg-gray-800" : ""
          }`}
        >
          <button
            className="flex gap-x-2 items-center"
            onClick={handleChangeToAdd}
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white text-2xl">
              <BsHouseAddFill />
            </span>
            <span className="text-white ml-2 text-lg font-bold">Add Asset</span>
          </button>
        </div>
        {/* Sidebar Toggle Button */}
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-4">
        {/* Header */}
        <header className="bg-gray-600 p-4 flex justify-between items-center">
          <button className="text-white text-2xl" onClick={toggleSidebar}>
            <FiMenu />
          </button>
          {publicKeyLocal && (
            <p className="text-white text-sm">
              <span>Public Key:</span> <span>{publicKeyLocal}</span>
            </p>
          )}
        </header>

        {/* Main Content */}
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
