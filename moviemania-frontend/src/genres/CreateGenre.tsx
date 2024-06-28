import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGenre() {
  const navigate = useNavigate();

  return (
    <>
      <h3>Create Genre</h3>
      <Button
        onClick={() => {
          // .. saving in the database
          navigate('/genres');
        }}
      >
        Save Changes
      </Button>
    </>
  );
}
