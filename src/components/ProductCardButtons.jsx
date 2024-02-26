import React from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { useState } from "react";

const ProductCardButtons = ({ onClick }) => {
  const [count, setCount] = useState(0);

  const [showCount, setShowCount] = useState(false);
  const handleShowCount = () => {
    setShowCount(true);
    increaseCount();
    onClick();
  };

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div className="absolute -top-4 -right-4 bg-productButtons rounded-3xl border-2 border-white">
        <button
          className="flex items-center justify-center p-2 rounded-full"
          onClick={handleShowCount}
        >
          <LuPlus className="text-customBlue" size={20} />
        </button>
        {showCount && (
          <div>
            <div className="text-center bg-productButtonPiece border-y border-productButtonPieceBorder text-xs text-customBlue font-bold leading-3 py-1">
              {count}{" "}
              <span className="block text-[10px] font-normal">Adet</span>
            </div>
            <button className="flex items-center justify-center p-2 rounded-full">
              <LuMinus
                onClick={decreaseCount}
                className="text-customBlue"
                size={20}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardButtons;
