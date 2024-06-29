import GenreForm from "./GenreForm";


export default function CreateGenre() {
  return (
    <>
      <h3>Create Genre</h3>
      <GenreForm model={{ name: "" }} 
        onSubmit={async value => {
          await new Promise(resolve => setTimeout(resolve, 1));
          console.log(value);
      }} />
    </>
  );
}
