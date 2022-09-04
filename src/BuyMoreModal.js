import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/outline";

const currencies = [
  { name: "SOL" },
  { name: "ETH" },
  { name: "BTC" },
  { name: "ABC" },
  { name: "PQR" },
  { name: "XYZ" },
];

const BuyMoreModal = ({ visible, onClose }) => {
  const [selected, setSelected] = useState(currencies[0]);

  if (visible) {
    return (
      <div
        className="h-screen w-screen bg-black bg-opacity-95 fixed top-0 flex flex-col gap-2 items-center justify-center"
        style={{ backdropFilter: "blur(16px)", padding: 10 }}
      >
        <div className="flex flex-col gap-2 items-center justify-center">
          <button
            onClick={onClose}
            className="p-2 bg-neutral-900 text-white rounded-lg self-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            className="text-neutral-200 bg-neutral-900 p-6 rounded-lg "
            style={{ minWidth: "300px", maxWidth: "550px", width: "100%" }}
          >
            <div className="flex justify-between px-2 mb-2 font-semibold">
              <div className="text-neutral-400">
                <h3>You Pay</h3>
              </div>

              <p>
                <span className="text-neutral-500">Max:</span>{" "}
                <span className="text-neutral-300">
                  {Math.random().toFixed(8)} SOL
                </span>
              </p>
            </div>

            <div className="flex items-end">
              <input
                className="w-full bg-transparent text-3xl px-3 py-2 focus:outline-none"
                placeholder="0"
                type="number"
              />

              <div className="w-auto">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-max flex items-center cursor-default rounded-full bg-black py-2 px-3 text-left shadow-md focus:outline-none focus-visible:border-neutral-500 focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-sm">
                      <img
                        src="https://via.placeholder.com/100x100"
                        className="h-7 w-7 rounded-full mr-2"
                      />

                      <span className="block truncate">{selected.name}</span>
                      <span className="pointer-events-none inset-y-0 right-0 flex items-center pl-2">
                        <SelectorIcon
                          className="h-5 w-5 text-neutral-100"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-50 mt-1 w-full currencies-list max-h-60 overflow-auto rounded-xl bg-neutral-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {currencies.map((currency, currencyIdx) => (
                          <Listbox.Option
                            key={currencyIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none p-2 flex items-center justify-start ${
                                active
                                  ? "bg-neutral-900 text-neutral-300"
                                  : "text-neutral-400"
                              }`
                            }
                            value={currency}
                          >
                            {({ selected }) => (
                              <>
                                <img
                                  src="https://via.placeholder.com/100x100"
                                  className="h-7 w-7 rounded-full mr-2"
                                />
                                <span
                                  className={`block ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {currency.name}
                                </span>
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>

          <div
            className="text-neutral-200 bg-neutral-900 p-6 rounded-lg "
            style={{ minWidth: "300px", maxWidth: "550px", width: "100%" }}
          >
            <div className="flex justify-between px-2 mb-2 font-semibold">
              <div className="text-neutral-400">
                <h3>You Recieve</h3>
              </div>

              <p>
                <span className="text-neutral-500">Max:</span>{" "}
                <span className="text-neutral-300">
                  {Math.random().toFixed(8)} SOL
                </span>
              </p>
            </div>

            <div className="flex items-end">
              <input
                className="w-full bg-transparent text-3xl px-3 py-2 focus:outline-none"
                placeholder="0"
                type="number"
              />

              <div className="w-auto">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-max flex items-center cursor-default rounded-full bg-black py-2 px-3 text-left shadow-md focus:outline-none focus-visible:border-neutral-500 focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-sm">
                      <img
                        src="https://via.placeholder.com/100x100"
                        className="h-7 w-7 rounded-full mr-2"
                      />

                      <span className="block truncate">{selected.name}</span>
                      <span className="pointer-events-none inset-y-0 right-0 flex items-center pl-2">
                        <SelectorIcon
                          className="h-5 w-5 text-neutral-100"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-50 mt-1 w-full currencies-list max-h-60 overflow-auto rounded-xl bg-neutral-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {currencies.map((currency, currencyIdx) => (
                          <Listbox.Option
                            key={currencyIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none p-2 flex items-center justify-start ${
                                active
                                  ? "bg-neutral-900 text-neutral-300"
                                  : "text-neutral-400"
                              }`
                            }
                            value={currency}
                          >
                            {({ selected }) => (
                              <>
                                <img
                                  src="https://via.placeholder.com/100x100"
                                  className="h-7 w-7 rounded-full mr-2"
                                />
                                <span
                                  className={`block ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {currency.name}
                                </span>
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>

          {/* fix to align center */}
          <button className="p-2 opacity-0 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* fix to align center */}
        </div>
      </div>
    );
  }
};

export default BuyMoreModal;
