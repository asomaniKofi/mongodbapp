"use client"

import { useState } from "react";
import { useRouter } from "next/router";

export default function EditSongForm({ id, title, description }) {

    const router = useRouter();
    const updateSong = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/songs/${id}`,
            {method:"PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify({newTitle, newDescription})});
            if(!res.ok){ 
                throw new Error(res.statusText);
            }
            router.reload();
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };



    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    return <form onSubmit={updateSong} className="flex flex-col gap-3">
        <input onChange={e => setNewTitle(e.target.value)} value={newTitle} className="border border-slate-500 px-8 py-2" type="text" placeholder="Edit Song Title" />
        <input onChange={e => setNewDescription(e.target.value)} value={newDescription} className="border border-slate-500 px-8 py-2" type="text" placeholder="Edit Song Description" />
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Song</button>
    </form>
}