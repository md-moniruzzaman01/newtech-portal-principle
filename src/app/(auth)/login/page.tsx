"use client";

import Brand from "@components/Brand";
import Button from "@components/Button";
import refreshPage from "@utils/reload";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const email: string = e.target.email.value;
    const password: string = e.target.password.value;
    fetch(`${process.env.API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          alert(data.msg);
        } else if (data.success) {
          localStorage.setItem("token", data.user.access_token);
          router.push("/");
          setTimeout(function () {
            refreshPage();
          }, 2000);
        }
        setLoading(false);
      });
  };

  //   if (data?._id) {
  //     router.push("/");
  //   }

  //   if (user_loading) {
  //     return <div>Loading ...</div>;
  //   }
  return (
    <form onSubmit={handleLoginSubmit}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center justify-center min-w-[25rem]  px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Brand />

          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@example.com"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="w-full mt-6">
            <Button className="w-full rounded-lg" loading={loading}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
