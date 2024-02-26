import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: data.email,
      password: data.password,
    };
    console.log(userData);
    axios
      .post("https://shop.orient.at/sermobileboss/login", userData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.status, response.data.apiKey);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <a href="/">
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="bg-customBlue p-2 w-[200px] md:w-[300px] object-cover"
        />
      </a>
      <div className="bg-white p-6 w-[300px] md:w-[600px] mt-10 shadow-md rounded-sm">
        <p className="text-customBlue font-bold text-lg text-center">
          Oturum Aç
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 mt-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-500"
            >
              Kullanıcı Adı veya E-mail Adresi
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                value={data.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Şifre
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-customBlue hover:text-customLightBlue transition-all"
                >
                  Şifremi Unuttum
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-customBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                value={data.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-customBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-customLightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customBlue transition-all"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <a href="/register" className="mt-3 text-customBlue ">
        Şimdi Üye Ol
      </a>
    </div>
  );
};

export default Login;
