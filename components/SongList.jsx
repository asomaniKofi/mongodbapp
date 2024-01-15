import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

const getSongs = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/songs", {cache: "no-store"});
		if(!res.ok) {
		throw new Error(res.statusText);
		}
		return res.json();
	} catch (err) {
		console.error(err);
	}

}
export default async function SongList() {

const {songs} = await getSongs();

	return <>
	{songs.map((song) => { 
		<div className="p-4 border-slate-300 my-3 flex justify-between gap-5 items-start">
			<div>
				<h2 className="font-bold text-2xld">{song.title}</h2>
				<div>{song.description}</div>
			</div>
			
			<div className="flex gap-2">
			<RemoveBtn id={song._id} />
			<Link href={`editSong/${song._id}`}>
			    <HiPencilAlt size={24} />
			</Link>
			</div>
		</div>
		})};
	</>;
}
