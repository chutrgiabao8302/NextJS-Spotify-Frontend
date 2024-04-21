import React from "react";
import MusicCard from "../components/MusicCard";

export default function HomePage() {
	return (
		<div className="w-full min-h-screen bg-[#060606] rounded-b-[8px]">
			<div className="mx-[24px] py-[8px]">
				<h2>Spotify Playlists</h2>

				<div className="grid lg:grid-cols-6 grid-cols-3 gap-2">
					<div className="col-span-1">
						<MusicCard />
					</div>
					<div className="col-span-1">
						<MusicCard />
					</div>
					<div className="col-span-1">
						<MusicCard />
					</div>
					<div className="col-span-1">
						<MusicCard />
					</div>
					<div className="col-span-1">
						<MusicCard />
					</div>
					<div className="col-span-1">
						<MusicCard />
					</div>
					<div className="col-span-1">
						<MusicCard />
					</div>
				</div>
			</div>
		</div>
	);
}
