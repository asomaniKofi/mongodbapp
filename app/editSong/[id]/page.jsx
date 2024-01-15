import EditSongForm from "../../../components/EditSongForm";

const getSongByID = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/songs/${id}`, {cache: 'no-store'});
        if (!res.ok){
            throw new Error(res.statusText);
        }
        
        return res.json();
    } catch (error) {
        console.log(error); 
    }
}
export default async function EditSong({params}){
    const {id} = params;
    const {song} = await getSongByID(id);
    const {title, description} = song;
    return <EditSongForm id={id} title={title} description={description}/>;
}