"use client";

import Link from "next/link";
import React from "react";
import {
	FaSpotify,
	FaHouseDamage,
	FaSearch,
	FaBookOpen,
	FaPlus,
	FaGlobe,
} from "react-icons/fa";

export default function Sidebar() {
    const handleAddLibrary = () => {
        alert('added');
    }

	return (
		<aside className="w-[360px] flex flex-col gap-[8px]">
			<div
				className="h-[150px] bg-[#121212] rounded-[8px]
              px-6 py-4 flex flex-col text-sm gap-2"
			>
				<div className=" h-[44px] flex gap-2 items-center">
					<FaSpotify size={25} />
					<span>Spotify</span>
				</div>
				<div className=" h-[44px] flex gap-2 items-center">
					<FaHouseDamage size={25} />
					<span className="px-2">Homepage</span>
				</div>
				<div className=" h-[44px] flex gap-2 items-center">
					<FaSearch size={25} />
					<span className="px-2">Search</span>
				</div>
			</div>
			<div className="flex-1 bg-[#121212] rounded-[8px] p-[8px]">
				<div className="libHeader flex items-center justify-between px-[16px] py-[8px]">
					<div className="yourLib flex gap-3 items-center text-sm">
						<FaBookOpen size={25} />
						<span>Your library</span>
					</div>
					<div className="createLib" onClick={handleAddLibrary}>
						<FaPlus size={20} />
					</div>
				</div>

				<div className="flex gap-1 flex-col min-h-[400px]">
					<div
						className="listInfo flex flex-col items-start py-[16px] px-[20px] 
              my-[8px] bg-[#242424] rounded-lg"
					>
						<span className="text-[1rem] font-bold">
							Create your first playlist
						</span>
						<span className="text-[0.75rem] mt-1">
							It's easy, we'll help you
						</span>
						<button
							className="px-[16px] py-[4px] text-[0.75rem] bg-[#fff] 
                text-black rounded-[2rem] mt-5"
						>
							Create playlist
						</button>
					</div>

					<div
						className="listInfo flex flex-col items-start py-[16px] px-[20px] 
              my-[8px] bg-[#242424] rounded-lg"
					>
						<span className="text-[1rem] font-bold">
							Let's find some podcasts to follow
						</span>
						<span className="text-[0.75rem] mt-1">
							We'll keep you updated on new episodes
						</span>
						<button
							className="px-[16px] py-[4px] text-[0.75rem] bg-[#fff] 
                text-black rounded-[2rem] mt-5"
						>
							Browse podcasts
						</button>
					</div>
				</div>

				<div
					className="navLink px-[24px] my-[32px] 
              flex flex-col gap-4 text-xs text-[#a7a7a7]"
				>
					<div className="flex flex-row gap-4">
						<Link href={"/"}>Legal</Link>
						<Link href={"/"}>Safety & Privacy Center</Link>
					</div>
					<div className="flex flex-row gap-4">
						<Link href={"/"}>Privacy Policy</Link>
						<Link href={"/"}>Cookies</Link>
						<Link href={"/"}>About Ads</Link>
					</div>
					<div className="flex flex-row gap-3">
						<Link href={"/"}>Accessibility</Link>
					</div>
					<div className="flex flex-row gap-3">
						<Link href={"/"}>Cookies</Link>
					</div>
				</div>

				<div className="px-[24px] flex justify-start">
					<button
						className="flex gap-2 items-center text-sm 
                border border-white rounded-[2rem] px-4 py-2"
					>
						<FaGlobe />
						<span>English</span>
					</button>
				</div>
			</div>
		</aside>
	);
}
