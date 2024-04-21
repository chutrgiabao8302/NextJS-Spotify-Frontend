import React from "react";
import PlaySVG from "../svg/PlaySVG";
export default function MusicCard() {
	return (
		<div className="flex flex-col p-[8px] gap-2 hover:bg-[#121212]">
			<div className="relative imgContainer w-full rounded-sm overflow-hidden">
				<img
					src="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5HZtdKfC4xU0wvhEyYDWiY/en"
					alt=""
					className="rounded-sm"
				/>

				<div className="playSVG absolute bottom-2 right-2 opacity-0">
					<PlaySVG />
				</div>
			</div>
			<span className="title text-sm text-white font-medium">
				Chillout lunge
			</span>
			<span className="title text-[0.7rem] text-[#a7a7a7] font-medium">
				Just lean back and enjoy relaxed beats.
			</span>
		</div>
	);
}
