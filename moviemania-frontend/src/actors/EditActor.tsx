import ActorForm from "./ActorForms";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm model={{ name: "Tom Holland", dateOfBirth: new Date('1996-06-01T00:00:00'), 
      biography : "**Tom Holland** is a British actor. He is best known for playing Spider-Man in the **Marvel** Cinematic Universe.",
        pictureURL : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQT9s6ycMzqXNhqEvsS0abx8_YnEcjjwB1B57FQ3XuJofTnwVUO"
      }} onSubmit={values => console.log(values)} />
    </>
  );
}
