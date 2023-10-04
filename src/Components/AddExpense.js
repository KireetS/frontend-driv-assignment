import React, { useState } from "react";
import axios from "axios";
const AddExpense = ({
  category,
  setCategory,
  year,
  setYear,
  month,
  setMonth,
  setPressed,
}) => {
  const handleCat = (e) => {
    setCategory(e.target.value);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [money, setMoney] = useState(0);
  const [name, setName] = useState("");
  const years = [];
  for (let year = 2010; year <= 2030; year++) {
    years.push(year);
  }
  const body = {
    category,
    name,
    year,
    month,
    money,
  };
  const postExpense = async (body) => {
    try {
      await axios.post("http://localhost:5000/api/expenses/add", body);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-full bg-blue-200 flex flex-col flex-grow items-center">
        <div className=" p-3 rounded-lg  flex-wrap bg-blue-400 flex items-center justify-center my-6">
          <div className="flex items-center justify-center mx-2 my-6">
            <div className="text-black font-thin text-base mx-3">
              Enter expense name Here :{" "}
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="flex items-center justify-center mx-2 my-6">
            <div className="text-black font-thin text-base mx-3">
              Enter month Here :{" "}
            </div>
            <select
              name="category"
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            >
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-center mx-2 my-6">
            <div className="text-black font-thin text-base mx-3">
              Enter year Here :{" "}
            </div>
            <select
              name="category"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-center mx-2 my-6">
            <div className="text-black font-thin text-base mx-3">
              {" "}
              Select Category :{" "}
            </div>
            <select name="category" value={category} onChange={handleCat}>
              <option value="Wants">Wants</option>
              <option value="Needs">Needs</option>
              <option value="Investments">Investments</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
          <div className="flex items-center justify-center mx-2 my-6">
            <div className="text-black font-thin text-base mx-3">
              Enter expense Here :{" "}
            </div>
            <input
              type="number"
              value={money}
              onChange={(e) => {
                setMoney(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-center mx-2 my-6">
            <button
              className="p-3 rounded-lg bg-slate-700 text-white font-semibold flex items-center justify-center mx-2"
              onClick={() => {
                postExpense(body);
                setPressed(true);
                setTimeout(() => {
                  setPressed(false);
                }, 10);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
