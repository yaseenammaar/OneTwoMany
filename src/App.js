// import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import Popup from "./Popup";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import logo from "./logo.png";
import gotballs from "./assets/gotballs.png";
import founder from "./assets/founder.jpeg";
import otm from "./assets/OTM.gif";
import con from "./assets/con.gif";
import { usePopper } from "react-popper";

import stake from "./Stake.gif";
import stake1 from "./Stake_1.gif";
import pp from "./dev.gif";
import BuyMoreModal from "./BuyMoreModal";

export default function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showWorking, setShowWorking] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  let [menuReferenceElement, setMenuReferenceElement] = useState();
  let [menuPopperElement, setMenuPopperElement] = useState();
  let { styles: menuStyles, attributes: menuAttributes } = usePopper(
    menuReferenceElement,
    menuPopperElement
  );

  return (
    <>
      <Popover as="nav" className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button
                ref={setMenuReferenceElement}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>

              <Popover.Panel
                ref={setMenuPopperElement}
                style={menuStyles.popper}
                {...menuAttributes.popper}
                className="absolute z-10"
              >
                <div className="grid grid-cols-1 mt-2 border border-gray-300 rounded-lg p-1 mr-4 bg-white ">
                  <button
                    class="py-1 text-left px-2 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowBuyModal(true)}
                  >
                    Buy Many
                  </button>
                  <button
                    class="py-1 text-left px-2 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowAbout(!showAbout)}
                  >
                    Documentation
                  </button>
                  <button
                    class="py-1 text-left px-2 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowAbout(!showAbout)}
                  >
                    How this works?
                  </button>
                </div>

                <img src="/solutions.jpg" alt="" />
              </Popover.Panel>
            </div>

            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 "
                      )}
                    >
                      <span onClick={() => setShowBuyModal(true)}>
                        Buy Many
                      </span>
                    </Popover.Button>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 "
                      )}
                    >
                      <span onClick={() => setShowAbout(!showAbout)}>
                        Documentation
                      </span>
                    </Popover.Button>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 "
                      )}
                    >
                      <span onClick={() => setShowAbout(!showAbout)}>
                        How this works?
                      </span>
                    </Popover.Button>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </Popover>

      {/* <p>Your balance is {URL}</p> */}
      {/* <button onClick={() => fetchURL()}>Refresh balance</button> */}

      <BuyMoreModal visible={showBuyModal} onClose={() => setShowBuyModal(false)}  />

      <br />
      <Popup visible={showAbout} close={() => setShowAbout(false)} />

      <section className="px-3 sm:px-12 lg:px-28  ">
        <center>
          <h2 class="font-medium pt-10 md:pb-20 pb-8 leading-tight mt-0 mb-2 md:text-4xl sm:text-3xl text-2xl text-gray-600">
            Introducing OneTwoMany!
          </h2>

          <section className="text-center px-3 sm:px-12  lg:px-28 border-b-2">
            <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden">
              <img class="w-full" src={stake} />
            </div>
            <br />
            <br />
          </section>

          <br />
          <h2 class="font-medium mt-8 mb-6 leading-tight text-3xl text-gray-600">
            What is OneTwoMany & P2M Gaming?
          </h2>
          <br />
        </center>

        <div className="flex gap-4 md:mb-20 md:flex-row flex-col md:mx-2 md:px-3 px-2">
          <div className="flex md:mb-0 mb-10 items-center justify-center">
            <div class="rounded-xl shadow-xl shadow-gray-300 overflow-hidden">
              <img class="w-full" src={otm} />
            </div>
          </div>
          <section className="px-3 md:px-8 flex md:my-0 items-center justify-center">
            <br />
            <br />
            <br />
            <br />
            <center>
              <h2 class="font-medium leading-tight mt-0 mb-3 text-2xl text-gray-800">
                OneTwoMany Staking Protocol
              </h2>
              <h4 class="font-normal leading-tight mt-0 mb-2 text-gray-500">
                OneTwoMany is an ethereum-based staking protocol, where user can
                stake their digital asset like NFTs and tokens in order to
                challenge other holders. They need to lock their asset into
                smartcontract and the winner will take locked assets.
              </h4>
            </center>
          </section>
        </div>

        <div className="flex gap-4 md:mb-10 md:mt-10 mt-20 md:flex-row flex-col-reverse md:mx-2 md:px-3 px-2 pb-16 border-b-2">
          <section className="flex md:px-8 flex-1 md:my-0 mb-10 items-center justify-center w-full px-3 h-auto align-middle">
            <div className="flex justify-center items-center">
              <div>
                <center>
                  <h2 class="font-medium leading-tight mt-0 mb-3 text-2xl text-gray-800">
                    Play to Multiply Gaming
                  </h2>

                  <h4 class="font-normal leading-tight mt-0 mb-2 text-gray-500">
                    P2M Gaming, Unlike Play to Earn(P2E) gaming where you earn
                    cryptocurrency for playing blockchain based games. In P2M
                    gaming, you need to have atleast one digital asset and to
                    send challenges to other players. This protocol is not just
                    limited to games, it can also be used as agreement and bonds
                    on blockchain.
                  </h4>
                  <br />
                  <h2 class="font-medium leading-tight mt-0 mb-2 text-2xl text-blue-400">
                    Say major +1 to your NFT's Utilities!
                  </h2>
                </center>
              </div>
            </div>
          </section>

          <div className=" flex-1 flex md:mb-0 mb-10 items-center justify-center">
            <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden">
              <img class="w-full" src={con} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-4 mt-8 sm:px-12 md:px-28 ">
        <center className="border-b-2">
          <h1 class="font-medium leading-tight text-3xl mt-0 mb-2 text-gray-600 ">
            Multi-Staking for NFT
          </h1>

          <br />
          <br />

          <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden ">
            <img class="w-full" src={stake1} />
          </div>
          <br />
          <h1 class="font-medium leading-tight text-xl mb-4 mt-2 text-gray-600 ">
            Team-Staking for NFT - Coming Soon
          </h1>
          <br />
        </center>
      </section>

      <section className="px-2">
        <center>
          <h1 class="font-medium leading-tight text-3xl mt-6 mb-2 text-gray-600">
            Our First Client: GotBalls?
          </h1>
        </center>
        <br />

        <section className="text-center px-3 sm:px-12 md:px-28 ">
          <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden ">
            <img class="w-full" src={gotballs} />
          </div>
        </section>
      </section>

      <br />
      <br />

      <section className="px-3 sm:px-12 md:px-28 ">
        <center className="border-b-2"></center>
      </section>

      <section className="py-4">
        <center>
          <h1 class="font-medium leading-tight text-3xl mt-6 mb-2 text-gray-600">
            Integration - Coming Soon
          </h1>
        </center>
        <br />

        <section className="text-center px-3 pb-6 sm:px-12 md:px-28">
          <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden">
            <img class="w-full" src={pp} />
          </div>
        </section>
      </section>
      <br />

      <section className="px-3 sm:px-12 md:px-28 ">
        <center className="border-b-2"></center>
      </section>

      <br />
      <br />

      <section className="text-center px-3 sm:px-12 md:px-28">
        <h1 class="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-600">
          Founder
        </h1>
        <center>
          {/* <span className="rounded-full shadow-xl shadow-gray-300 overflow-hidden"> */}
          <a href="https://www.linkedin.com/in/yaseenammaar">
            <img
              className="rounded-full shadow-xl h-32 shadow-gray-300 "
              src={founder}
            />
            <h1 class="font-medium leading-tight text-xs mt-0 mb-2 text-gray-600 py-2">
              Yaseen Ammaar <br />
              (LinkedIn)
            </h1>
            {/* </span> */}
          </a>
        </center>
      </section>

      <br />
      <br />

      <Footer />
    </>
  );
}
