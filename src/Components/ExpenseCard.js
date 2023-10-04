import React, { useState } from "react";
import axios from "axios";
import UpdateModal from "./UpdateModal";
const ExpenseCard = ({
  id,
  category,
  month,
  year,
  name,
  money,
  setPressed,
}) => {
  const deleteE = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/delete/${id}`);
    } catch (err) {
      console.error(err);
    }
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <UpdateModal
        showModal={showModal}
        setShowModal={setShowModal}
        id={id}
        setPressed={setPressed}
      />
      <div className="relative rounded-lg flex items-center p-5 my-6 mx-3 justify-between bg-blue-500 ">
        <div className="text-white font-semibold flex items-center justify-center">
          {month} {year}
        </div>
        <div className="text-white font-semibold flex items-center justify-center">
          {name} : {money}
        </div>
        <div className="text-white font-semibold flex items-center justify-center">
          Category : {category}
        </div>
        <div className="absolute top-[-1rem] right-[0rem] ">
          <button
            className="bg-red-500 text-white p-1 font-bold text-lg rounded-bl-full "
            onClick={() => {
              deleteE(id);
              setPressed(true);
              setTimeout(() => {
                setPressed(false);
              }, 10);
            }}
          >
            &#215;
          </button>
        </div>
        <button
          className="p-3 rounded-lg bg-slate-700 text-white font-semibold flex items-center justify-center mx-2"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default ExpenseCard;
