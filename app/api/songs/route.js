import Song from "../../../models/Song";
import connectDB from "../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectDB();

    await Song.create({ title, description });
    return NextResponse.json({ message: "Song created successfully" }, { status: 201 });
}

export async function GET() {
    await connectDB();
    const songs = await Song.find();
    return NextResponse.json(songs, { status: 200 });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Song.findByIdAndDelete({ _id: id });
    return NextResponse.json({ message: "Song deleted successfully" }, { status: 200 });
}

