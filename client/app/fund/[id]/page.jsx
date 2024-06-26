"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useForm } from "react-hook-form";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useSolPay } from "@/app/solPay";

require("@solana/wallet-adapter-react-ui/styles.css");

export default function Page({ params }) {
  const [btn, setBtn] = useState(false);
  const [fundData, setFundData] = useState();
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const { register, reset, setValue, watch, handleSubmit } = useForm({
    defaultValues: {
      imageSrc: "",
    },
  });

  const {
    connected,
    publiCKey,
    doTransaction,
    amount,
    setAmount,
    receiver,
    setReceiver,
    transactionPurpose,
    setTransactionPurpose,
  } = useSolPay();

  useEffect(() => {
    const forFunds = async () => {
      const id = params.id;
      try {
        const response = await axios.get(
          `http://localhost:4000/api/fund/${id}`
        );
        setFundData(response.data);
      } catch (error) {
        console.log(`error fetching fund data`, error);
      }
    };
    forFunds();
    // setTimeout(calculateRoute, 2000);
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return null;
  }

  let hasExecuted = false;

  if (fundData && !hasExecuted) {
    // calculateRoute();
    hasExecuted = true;
  }

  async function calculateRoute() {
    // const origin1 = (parseInt(cropData.lat), parseInt(cropData.lon));
    // const destination1 = (parseInt(ngoData.lat), parseInt(ngoData.lon));
    // if (origin1 === "" || destination1 === "") {
    //   return;
    // }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: new google.maps.LatLng(
        parseInt(fundData.croplat),
        parseInt(fundData.croplon)
      ),
      destination: new google.maps.LatLng(
        parseInt(fundData.ngolat),
        parseInt(fundData.ngolon)
      ),

      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  const onPay = async (data) => {
    setAmount(parseInt(data.sols));
    setReceiver(data.id);
    setTransactionPurpose(data.note);

    await doTransaction({ amount, receiver, transactionPurpose });

    reset();
  };

  return (
    <>
      {fundData && (
        <div data-theme="light h-screen">
          <span className="flex px-3 pt-2">
            {" "}
            <div className=" border-2 aspect-square  w-1/2 h-96  relative overflow-hidden rounded-xl mr-3">
              <Image
                fill
                alt="Listings"
                src={fundData.imagesrc}
                className=" object-cover h-full w-full group-hover:scale-110 transition"
              />
            </div>
            <div className=" border-2 aspect-square  w-1/2 h-96 relative overflow-hidden rounded-xl ">
              <GoogleMap
                zoom={6}
                mapContainerStyle={{ width: "100%", height: "90%" }}
              >
                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
              </GoogleMap>
              <div className="w-full flex justify-center items-center gap-2">
                <button
                  onClick={calculateRoute}
                  className="border-2 rounded-xl px-2 py-1 bg-blue-500 text-gray-100"
                >
                  See Routes!
                </button>

                {distance && <div className="p-2">{distance}</div>}
              </div>
            </div>
          </span>
          <div className=" flex-col flex  w-full p-4 ">
            <span className="font-semibold">
              Description(About the Crop/transportation and where the will be
              used) :-
            </span>
            <div className="w-full p-5  border-2 mt-2 border-neutral-300 rounded-md ">
              <p>{fundData.description}</p>
            </div>

            <div className="flex w-full gap-2 mt-2">
              <div className="w-1/2">
                {" "}
                <span className="font-semibold mt-2">
                  Quantity of the Crop:-
                </span>
                <div className="w-full p-5  border-2 mt-2 border-neutral-300 rounded-md ">
                  <p>{fundData.quantity} Kgs </p>
                </div>
              </div>
              <div className="w-1/2">
                {" "}
                <span className="font-semibold mt-2">
                  Funds Needed for Transportation & miscellinous(in Sol):-
                </span>
                <div className="w-full p-5  border-2 mt-2 border-neutral-300 rounded-md ">
                  <p>
                    {fundData.fund} sol{" "}
                    <span className="text-xs font-bold">
                      (*Note the money will be transferred to NGO Acc.)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <div className="w-1/2">
                <span className="font-semibold mt-6">
                  Contact(email) of NGO :-
                </span>
                <div className="w-full p-5  border-2 mt-2 border-neutral-300 rounded-md ">
                  <p>{fundData.ngomail}</p>
                </div>
              </div>
              <div className="w-1/2">
                <span className="font-semibold mt-6">Social/website:-</span>
                <div className="w-full p-6 flex items-center justify-center   border-2 mt-2 border-neutral-300 rounded-md ">
                  <Link href="hlo">
                    <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <span className="font-semibold">
                Wallet address for donation (send your sol here) :-
              </span>
              <div className="w-full p-4  border-2 mt-1 border-neutral-300 rounded-md ">
                <p>{fundData.donationid} </p>{" "}
                <span className="text-xs font-bold">
                  (*Note the money will be transferred to NGO Acc.)
                </span>
              </div>

              <div className="p-2 flex justify-center items-center">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_7").showModal()
                  }
                  className="border-2 px-4 py-2 rounded-xl bg-green-500 text-white"
                >
                  Donate
                </button>
              </div>

              <>
                <div>
                  <dialog id="my_modal_7" className="modal">
                    <div className="modal-box ">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg text-center">
                        Please Fill it!
                      </h3>

                      <form action="" onSubmit={handleSubmit(onPay)}>
                        <div className="w-full  relative pt-1">
                          <input
                            {...register("sols")}
                            // defaultValue={add1}
                            placeholder=" "
                            className={` peer  w-full p-5 pb-4 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                          />
                          <label
                            className={`absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400 `}
                          >
                            Number of Sols
                          </label>
                        </div>
                        <div className="w-full  relative pt-1">
                          <input
                            {...register("id")}
                            defaultValue={fundData.donationid}
                            placeholder=" "
                            className={` peer  w-full p-5 pb-4 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                          />
                          <label
                            className={`absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400 `}
                          >
                            Transaction Id (of NGO)
                          </label>
                        </div>
                        <div className="w-full  relative pt-1">
                          <input
                            {...register("note")}
                            // defaultValue={add1}
                            placeholder=" "
                            className={` peer  w-full p-5 pb-4 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                          />
                          <label
                            className={`absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400 `}
                          >
                            Note.
                          </label>
                        </div>
                        <div className="flex justify-center items-center mt-2">
                          <button className="px-3 py-1 border-2  rounded-xl bg-blue-600 text-white">
                            Pay
                          </button>
                        </div>
                      </form>
                    </div>
                  </dialog>
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
