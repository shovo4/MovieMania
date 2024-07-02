import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import { title } from "process";
import * as Yup from "yup";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";

// Define custom Yup method
Yup.addMethod(Yup.string, 'firstLetterUppercase', function() {
    return this.test('firstLetterUppercase', 'The first letter must be uppercase', function(value) {
      if (value && value.length > 0) {
        const firstLetter = value.substring(0, 1);
        return firstLetter === firstLetter.toUpperCase();
      }
      return true;
    });
  });

export default function MovieForm(props: movieFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                title: Yup.string().required("This field is required").firstLetterUppercase()
            })
            }
        >
            {formikProps => (
                <Form>
                    <TextField field="title" displayName="Title" />
                    <CheckboxField field="inTheaters" displayName="In Theaters" />
                    <TextField field="trailer" displayName="Trailer" />
                    <DateField field="releaseDate" displayName="Release Date" />
                    <ImageField field="poster" displayName="Poster" imageURL={props.model.posterURL}/>
                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
}