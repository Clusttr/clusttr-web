"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/constants";

interface LoginFormValues {
  idToken: string | null;
  publicKey: string | null;
  pin: string;
}

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [idTokenLocal, setIdTokenLocal] = useState<string | null>("");
  const [publicKeyLocal, setPublicKeyLocal] = useState<string | null>("");

  const router = useRouter();

  const initialValues: LoginFormValues = {
    idToken: "",
    publicKey: "",
    pin: "",
  };

  const validationSchema = Yup.object().shape({
    pin: Yup.string()
      .required("Required")
      .min(6, "must be at least 6 characters long"),
  });

  useEffect(() => {
    const loginSession = localStorage.getItem("openlogin_store");
    if (loginSession) {
      const sessionData = JSON.parse(loginSession);
      if (sessionData && sessionData.sessionId === "") {
        // Redirect to the home page if the sessionId is empty
        router.push("/");
      }
    }

    const storedIdToken = localStorage.getItem("idToken");
    if (storedIdToken) {
      setIdTokenLocal(storedIdToken);
    }
    const publicKey = localStorage.getItem("publicKey");
    if (publicKey) {
      setPublicKeyLocal(publicKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (values: LoginFormValues) => {
    setIsSubmitting(true);

    try {
      values.idToken = idTokenLocal;
      values.publicKey = publicKeyLocal;

      const response = await axios.post(`${baseUrl}/auth/login`, values, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response.data;
      // console.log(response.data);
      localStorage.setItem("token", response.data.token);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error signing In:", error);
    }
    setIsSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-[20rem]"
      >
        <h1 className="text-lg font-bold mb-4 text-center">Login</h1>

        <input
          type="text"
          name="pin"
          placeholder="Enter password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pin}
          className={`w-full p-2 border rounded mb-4 ${
            formik.errors.pin && formik.touched.pin ? "border-red-500" : ""
          }`}
        />
        {formik.errors.pin && formik.touched.pin && (
          <div className="text-red-500 text-sm mb-4">{formik.errors.pin}</div>
        )}

        <button
          type="submit"
          className={`w-full p-2 rounded-full bg-blue-500 text-white ${
            isSubmitting ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging In..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
