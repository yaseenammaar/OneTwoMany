// import Header from "./header"; 
import Footer from "./footer"; 
import { useEffect,  useState } from "react";
import { getURL, getNextPrice,updateURLtoBC } from './Web3Client';
import Popup from './Popup';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon
} from '@heroicons/react/outline'
import logo from "./logo.png";
import gotballs from "./assets/gotballs.png";
import founder from "./assets/founder.jpeg";
import otm from "./assets/OTM.gif";
import con from "./assets/config.gif";

import stake from "./Stake.gif";
import stake1 from "./Stake_1.gif";
import pp from "./dev.gif";

import * as SolanaWeb3 from '@solana/web3.js';
import bs58 from "bs58"

// const fromAddress = "FROM_ADDRESS"
// const toAddress = "TO_ADDRESS"

// const fromPublicKey = new SolanaWeb3.PublicKey(fromAddress);
// const toPublicKey = new SolanaWeb3.PublicKey(toAddress);

// const tokenPublicKey = new SolanaWeb3.PublicKey(tokenAddress);


export default function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showWorking, setShowWorking] = useState(false);


  async function sendTokenToOwnerWallet(){
    // const transaction = new SolanaWeb3.Transaction().add(
    //     createTransferInstruction( // imported from '@solana/spl-token'
    //         fromTokenAccount.address,
    //         toTokenAccount.address,
    //         fromPublicKey,
    //         parseInt(amount * Math.pow(10, 6)), // tokens have 6 decimals of precision so your amount needs to have the same
    //         [],
    //         TOKEN_PROGRAM_ID // imported from '@solana/spl-token'
    //     )
    // );
    
    // // set a recent block hash on the transaction to make it pass smoothly
    // const latestBlockHash = await connection.getLatestBlockhash();
    // transaction.recentBlockhash = latestBlockHash.blockhash;
    
    // // set who is the fee payer for that transaction
    // transaction.feePayer = solPublicKey;
    
    // // sign the transaction using the signTransaction method that we got from the useWallet hook above
    // const signed = await signTransaction(transaction);
    
    // // send the signed transaction
    // const signature = await connection.sendRawTransaction(signed.serialize());
    
    // // wait for a confirmation to make sure it went to the blockchain (optional)
    // await connection.confirmTransaction({
    //     signature,
    //     lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    //     blockhash: latestBlockHash.blockhash,
    // });

  }

  async function sendManyTokensToBuyer(){
    

    // const privateKey = "THE_PRIVATE_KEY_AS_A_STRING"

    // const fromWallet = SolanaWeb3.Keypair.fromSecretKey(bs58.decode(privateKey));

    // const signature = await splToken.transfer(
    //     connection,
    //     fromWallet,
    //     fromTokenAccount.address,
    //     toTokenAccount.address,
    //     fromWallet.publicKey, // or pass fromPublicKey
    //     amount * Math.pow(10, 6) // tokens have 6 decimals of precision so your amount needs to have the same
    // );
  }



  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              
              <img
                className="h-32 w-auto sm:h-10"
                src={logo}
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">

          <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 '
                    )}
                  >
                    <span onClick={() => setShowAbout(!showAbout)}>Documentation</span>
                    
                  </Popover.Button>

                </>
              )}
            </Popover>


            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 '
                    )}
                  >
                    <span onClick={() => setShowAbout(!showAbout)}>How this works?</span>
                    
                  </Popover.Button>

                </>
              )}
            </Popover>

            <Popover className="relative">
          
                <>
               
                  <Popover.Button
                    onClick={() => window.open("https://discord.gg/JB9xd9dzfD", '_blank', 'noopener,noreferrer')}
                    className={classNames(
                     'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 '
                    )}
                  >
                    <span>Discord</span>
                    
                  </Popover.Button>
                 

                </>
         
            </Popover>

          </Popover.Group>
        
        </div>
      </div>
     
    </Popover>

    {/* <p>Your balance is {URL}</p> */}
			{/* <button onClick={() => fetchURL()}>Refresh balance</button> */}
  
<br/>
    <Popup visible={showAbout}/>

    <section className="px-3 sm:px-12 md:px-28  ">
      <center>
      <h2 class="font-medium leading-tight mt-0 mb-2 text-4xl text-gray-600">
            Introducing OneTwoMany Protocol!
        </h2>




      <section className="text-center px-3 sm:px-12 md:px-28 border-b-2">
              <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden">
                <img class="w-full" src={stake} />
              </div>
              <br/><br/>
            </section>
            
            
            <br/>
            <h2 class="font-medium leading-tight mt-0 mb-2 text-3xl text-gray-600">
            What is OneTwoMany Protocol & P2M Gaming?
        </h2>
        <br/>
        </center>
      <div className="columns-2 mx-2 px-3">
      <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden">
                <img class="w-full" src={otm} />
              </div>
        <section className="px-3">
          <br/><br/><br/><br/>
        <center>
          <h2 class="font-medium leading-tight mt-0 mb-2 text-2xl text-gray-600">
            OneTwoMany Protocol
          </h2>
          <h4 class="font-medium leading-tight mt-0 mb-2 text-gray-600">
            OneTwoMany is a staking protocol, where user can stake their digital asset like NFTs and tokens in order to challenge other holders. They need to lock their asset into smartcontract and the winner will take locked assets.
          </h4>
          </center>
        </section>
        <br/>
      </div>

      <br/>

      <div className="columns-2 mx-2 px-3 border-b-2">
      <section className="w-full h-full px-3 inline-block align-middle">
        <div className="flex justify-center items-center">
          <div>
          <br/><br/><br/>
            <center>
              <h2 class="font-medium leading-tight mt-0 mb-2 text-2xl text-gray-600">
              Play to Multiply Gaming
              </h2>
            
              <h4 class="font-medium leading-tight mt-0 mb-2 text-gray-600">
              P2M Gaming, Unlike Play to Earn(P2E) gaming where you earn cryptocurrency for playing blockchain based games. In P2M gaming, you need to have atleast one digital asset and to send challenges to other players. This protocol is not just limited to games, it can also be used as agreement and bonds on blockchain.
              </h4>
              <br/>
              <h2 class="font-medium leading-tight mt-0 mb-2 text-2xl text-blue-400">
              Say major +1 to your NFT's Utilities!
              </h2>
            </center>
          </div>
          </div>
        </section>
        

        <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden">
                <img class="w-full" src={con} />
        </div>

        <br/><br/>
      
      </div>

      </section>
      <section className="px-3 sm:px-12 md:px-28 ">
      
            <center className="border-b-2">
            <br/><br/>
      <h1 class="font-medium leading-tight text-3xl mt-0 mb-2 text-gray-600 ">Multi-Staking for NFT</h1>
      
            <br/><br/>
            
              <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden ">
                <img class="w-full" src={stake1} />
              </div>
              <br/>
              <h1 class="font-medium leading-tight text-xl mt-0 mb-2 text-gray-600 ">Team-Staking for NFT - Coming Soon</h1>
              <br/>
              
            
              </center>
            </section>
            
            <center>
            <br/>
            
            
            
            <section className="px-3 sm:px-12 md:px-28 ">
      <center className="border-b-2">
        </center>
      </section>
      
            <center>
              <br/>
      <h1 class="font-medium leading-tight text-3xl mt-0 mb-2 text-gray-600">Integration - Coming Soon</h1>
        </center>
            <br/>
            <section className="text-center px-3 sm:px-12 md:px-28">
              <div className="rounded-xl shadow-xl shadow-gray-300 overflow-hidden">
                <img class="w-full" src={pp} />
              </div>
            </section>
            <br/>

           

          <section className="px-3 sm:px-12 md:px-28 ">
      <center className="border-b-2">
        </center>
      </section>

            <br/><br/>


            <section className="text-center px-3 sm:px-12 md:px-28">
            <h1 class="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-600">Founder</h1>
            <center>
                {/* <span className="rounded-full shadow-xl shadow-gray-300 overflow-hidden"> */}
                <a href="https://www.linkedin.com/in/yaseenammaar">
                  <img className="rounded-full shadow-xl h-32 shadow-gray-300 " src={founder} />
                  <h1 class="font-medium leading-tight text-xs mt-0 mb-2 text-gray-600 py-2">Yaseen Ammaar <br/>(LinkedIn)</h1>
                {/* </span> */}
                </a>
              </center>
            </section>

            <br/><br/>
            
          
          
    <Footer/>
   
    </>
  )
}
