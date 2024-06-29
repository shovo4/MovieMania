import { useParams } from "react-router-dom";
import GenreForm from "./GenreForm";

export default function EditGenre() {
    const { id }: any = useParams();
    return (
        <>
        <h3>Edit Genre</h3>
        <GenreForm model={{ name: "Action" }} 
            onSubmit={async value => {
                await new Promise(resolve => setTimeout(resolve, 1));
                console.log(id, value);
            }
        }
        />
        </>
    );
  }