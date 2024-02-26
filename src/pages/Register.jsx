import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
    gsm: "",
    country: "",
    city: "",
    address: "",
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
      email: data.email,
      password: data.password,
      name: data.name,
      company: data.company,
      gsm: data.gsm,
      country: data.country,
      city: data.city,
      address: data.address,
    };
    console.log(userData);
    axios
      .post("https://shop.orient.at/sermobileboss/register", userData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.status, response.messages);
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
          Kayıt Ol
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 mt-5">
          <div className="flex items-center flex-col md:flex-row justify-between">
            <div>
              <label
                htmlFor="firma"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Firma
              </label>
              <div className="mt-2">
                <input
                  id="firma"
                  name="company"
                  type="text"
                  required
                  className="block w-[240px] rounded-md border-0 py-1.5 px-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                  value={data.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <label
                htmlFor="yetkili"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Yetkili Kişi
              </label>
              <div className="mt-2">
                <input
                  id="yetkili"
                  name="name"
                  type="text"
                  required
                  className="block w-[240px] rounded-md border-0 py-1.5 px-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-col md:flex-row ">
            <div>
              <label
                htmlFor="mail"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="mail"
                  name="email"
                  type="email"
                  required
                  className="block w-[240px] rounded-md border-0 py-1.5 px-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <div className="">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-500"
                >
                  Şifre
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-[240px] rounded-md border-0 py-1.5 text-customBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-medium leading-6 text-gray-500 md:ms-0 ml-2"
            >
              Telefon
            </label>
            <div className="flex flex-col items-center justify-center mt-2 m">
              <input
                id="telephone"
                name="gsm"
                type="number"
                required
                className="block w-[240px] md:w-full rounded-md border-0 py-1.5 px-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                value={data.gsm}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between flex-col md:flex-row ">
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Ülke
              </label>
              <div className="mt-2">
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  className="block w-[240px] rounded-md border-0 py-1.5 px-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                  value={data.country}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-500"
                >
                  Şehir
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="block w-[240px] rounded-md border-0 py-1.5 text-customBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                  value={data.city}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-500"
            >
              Adres
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="textarea"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6 h-[50px]"
                value={data.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-customBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-customLightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customBlue transition-all"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
