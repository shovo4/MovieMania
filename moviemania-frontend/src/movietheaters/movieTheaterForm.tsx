import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import * as Yup from "yup";
import MapField from "../forms/MapField";
import coordinateDTO from "../utils/coordinates.model";

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

export default function MovieTheaterForm(props: MovieTheaterFormProps) {

    function transformCoordinates(): coordinateDTO[] | undefined {
        if (props.model.latitude && props.model.longitude) {
            const response: coordinateDTO = {
                lat: props.model.latitude,
                lng: props.model.longitude
            }
            return [response];
        }
        return undefined;
    }    
    return (
        <Formik
        initialValues={props.model}
        onSubmit={(values, actions) => {
            props.onSubmit(values, actions);
            actions.setSubmitting(false);
        }}
        validationSchema={Yup.object({
            name: Yup.string()
            .required("This field is required.")
            .firstLetterUppercase(),
        })}
        >
        {(formikProps) => (
            <Form>
            <TextField displayName="Name" field="name" />
            <div style={{marginBottom: '1rem'}}>
                <MapField latField="latitude" lngField="longitude" coordinates={transformCoordinates()}/>
            </div>
            <Button disabled={formikProps.isSubmitting} type="submit">
                Save Changes
            </Button>
            <Link className="btn btn-secondary" to="/movietheaters">
                Cancel
            </Link>
            </Form>
        )}
        </Formik>
    );
    }

interface MovieTheaterFormProps {
  model: movieTheaterCreationDTO;
  onSubmit(values: movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void;
}
