"use client";
import { Disclosure } from "@headlessui/react";
import EpisodeItemLayout from "./episodeItemLayout";
import { Season } from "@/libs/model/seasson";
import { Episode } from "@/libs/model/episode";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface props {
  season: Season;
}
export default function SeasonLayout({ season }: props) {
  
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className=" text-xl my-1 text-gray-300 flex justify-between items-center w-full bg-gray-750 px-6 py-3  rounded-lg">
            {season?.title}
            <svg
              className={`transition text-gray-200         duration-500 ${open ? "rotate-0 transform" : " rotate-90"
                } duration-200 sm:scale-125 scale-75 `}
              width="14"
              height="21"
              viewBox="0 0 14 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M8.29288 6.37436L8.65625 2.26557C8.65625 1.34349 7.90136 0.595886 6.9703 0.595886C6.03923 0.595886 5.28434 1.34349 5.28434 2.26557L5.64772 6.37436C5.64772 7.09773 6.23988 7.68418 6.9703 7.68418C7.70194 7.68418 8.29288 7.09773 8.29288 6.37436"
                fill="currentColor"
              ></path>
              <path
                d="M8.22674 20.172C8.29159 20.1077 8.56565 19.8678 8.79322 19.6425C10.2186 18.3278 12.5493 14.8951 13.2626 13.0994C13.3764 12.8268 13.6186 12.1374 13.6357 11.7678C13.6357 11.4152 13.5538 11.0783 13.3923 10.7573C13.1659 10.3562 12.8087 10.0363 12.3878 9.85941C12.0966 9.74672 11.2218 9.56982 11.2059 9.56982C10.2504 9.39412 8.69656 9.2984 6.9788 9.2984C5.34423 9.2984 3.85403 9.39412 2.88259 9.53831C2.86546 9.55406 1.78024 9.73097 1.4083 9.92362C0.728047 10.2762 0.30717 10.9657 0.30717 11.7036V11.7678C0.323076 12.2488 0.745176 13.2594 0.759858 13.2594C1.47315 14.9593 3.69131 18.3108 5.1656 19.6582C5.1656 19.6582 5.54488 20.0387 5.78101 20.2035C6.12114 20.4603 6.54202 20.5888 6.96289 20.5888C7.43271 20.5888 7.86949 20.4446 8.22674 20.172"
                fill="currentColor"
              ></path>
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className={`${open ? ' block' : ' hidden'} duration-1000 transition-all transform`}>

            {
              season?.episodes?.length === 0 ? (
                <div className="p-2 my-1 mr-10 rounded-lg flex items-center">
                  <p className=" text-gray-300">هنوز جلسه ای قرار نگرفته  است</p>

                </div>
              ) : season?.episodes?.map((episode: Episode) => (
                <EpisodeItemLayout key={episode?._id} episode={episode} />
              ))
            }
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
