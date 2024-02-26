import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "redaxios";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get("https://shop.orient.at/sermobileboss/get_sub_categories/1")
      .then((response) => {
        const data = response.data.sub_categories;
        setCategoryData(data);
        console.log("categoryData", categoryData);
      })
      .catch((error) => {
        console.log("Error fatching data", error);
      });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="bg-productButtons text-customBlue px-3 py-2 rounded-md flex items-center justify-between gap-4"
      >
        Kategoriler
        <HiOutlineMenuAlt2 size={22} />
      </button>
      {isOpen && (
        <div className="bg-categoryBg absolute w-[900px] top-12 z-50 grid grid-cols-9 p-10 rounded-md gap-3">
          {categoryData.map((category) => (
            <Link
              key={category.id}
              to={`category/${category.id}`}
              className="col-1 flex flex-col items-center p-2 bg-white rounded-md hover:bg-gray-100"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-[70px] h-[70px] border-b"
              />
              <p className="text-[10px] w-[70px] h-[20px] text-center truncate leading-3 mt-1 ">
                {category.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
