import connectDB from "../../../libs/mongodb";
import Song from "../../../models/Song";

export async function PUT(request, {params}) {
    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await connectDB();
    await Song.findByIdAndUpdate({_id: id}, {title, description});
    return NextResponse.json({ message: "Song updated successfully" }, { status: 200});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectDB();
    const song = await Song.findOne({ _id: id });
    return NextResponse.json(song, { status: 200 });
}