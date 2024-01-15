'use client';

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/router";

export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removeSong = async () => {
        const confirmed = confirm("Are you sure you want to delete this song?");
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/songs?id=${id}`, { method: "DELETE" });
            if (res.ok) {
                router.refresh();
            }
        }
    }



    return <button onClick={removeSong} className="text-red-400">
        <HiOutlineTrash size={24} />
    </button>;
}