'use client';
import { useState } from "react";
import { useRouter } from "next/router";
console.log('Client form');
export default function addSong() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

    try {
        const res = await fetch("http://localhost:3000/api/songs", {
            method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, description })
        });
        if (res.ok) {
            router.push("/");
        } else {
            throw new Error(res.statusText);
        }
    } catch (err) {
        console.error(err);
    }
};
    return <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input required onChange={(e =>{
        setTitle(e.target.value);
        })} value={title} className="border border-slate-500 px-8 py-2" type="text" placeholder="Song Title" />
        <input required onChange={(e =>{
        setDescription(e.target.value);
        })} value={description} className="border border-slate-500 px-8 py-2" type="text" placeholder="Song Description" />
        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Song</button>
    </form>
}