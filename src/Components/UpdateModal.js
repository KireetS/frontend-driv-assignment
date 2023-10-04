// UpdateModal.js
import axios from "axios";
import React, { useState } from "react";

const UpdateModal = ({ showModal, setShowModal, id, setPressed }) => {
  const update = async (id, body) => {
    try {
      await axios.put(`http://localhost:5000/api/expenses/update/${id}`, body);
    } catch (err) {
      console.error(err);
    }
  };
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState(2010);
  const [category, setCategory] = useState("Wants");
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
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-950 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-gray-200 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col items-center justify-center">
                    <div>
                      <div className="text-gray-200 text-lg font-semibold">
                        Update Name
                      </div>
                      <div>
                        <input
                          type="text"
                          value={name}
                          className="bg-slate-700   text-gray-200 focus:outline-none active:outline-none   p-2 h-10 rounded-lg my-3 mx-2"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-200 text-lg font-semibold">
                        Update Money
                      </div>
                      <div>
                        <input
                          type="number"
                          value={money}
                          className="bg-slate-700   text-gray-200 focus:outline-none active:outline-none   p-2 h-10 rounded-lg my-3 mx-2"
                          onChange={(e) => {
                            setMoney(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-200 text-lg font-semibold">
                        Update Year
                      </div>
                      <div>
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
                    </div>

                    <div>
                      <div className="text-gray-200 text-lg font-semibold">
                        Update Month
                      </div>
                      <div>
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
                    </div>

                    <div>
                      <div className="text-gray-200 text-lg font-semibold">
                        Update Category
                      </div>
                      <div>
                        <select
                          name="category"
                          value={category}
                          onChange={(e) => {
                            setCategory(e.target.value);
                          }}
                        >
                          <option value="Wants">Wants</option>
                          <option value="Needs">Needs</option>
                          <option value="Investments">Investments</option>
                          <option value="Personal">Personal</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-950 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      update(id, body);
                      setPressed(true);

                      setTimeout(() => {
                        setPressed(false);
                      }, 20);
                    }}
                  >
                    Save Changes
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
};

export default UpdateModal;
