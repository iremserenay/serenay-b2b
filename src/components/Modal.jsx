import React from "react";
import { BiZoomIn } from "react-icons/bi";

export default function Modal({ image }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="absolute bottom-5 right-5"
        onClick={() => setShowModal(true)}
      >
        <BiZoomIn size={24} className="text-customBlue" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <img
                    src={image}
                    alt=""
                    className="w-[600px] h-[600px] object-cover"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
