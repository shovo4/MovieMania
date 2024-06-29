import { Formik, FormikHelpers, Form } from "formik";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { actorCreationDTO } from "./actors.model";
import * as Yup from 'yup';
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkdownField from "../forms/MarkdownField";

// Ensure firstLetterUppercase method is defined
Yup.addMethod(Yup.string, 'firstLetterUppercase', function () {
  return this.test('firstLetterUppercase', 'The first letter must be uppercase', function (value) {
    if (value && value.length > 0) {
      const firstLetter = value.substring(0, 1);
      return firstLetter === firstLetter.toUpperCase();
    }
    return true;
  });
});

export default function ActorForm(props: actorFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={(values, actions) => {
        props.onSubmit(values, actions);
        actions.setSubmitting(false);
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('This field is required').firstLetterUppercase(),
        dateOfBirth: Yup.date().nullable().required('This field is required').max(new Date(), 'The date of birth cannot be in the future')
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Name" field="name" />
          <DateField displayName="Date of Birth" field="dateOfBirth" />
          <ImageField displayName="Picture" field="picture" imageURL={props.model.pictureURL}/>
          <MarkdownField displayName="Biography" field="biography" />
          <Button disabled={formikProps.isSubmitting} type="submit">Save</Button>
          <Link to="/actors" className="btn btn-secondary">Cancel</Link>
        </Form>
      )}
    </Formik>
  )
}

interface actorFormProps {
  model: actorCreationDTO;
  onSubmit(values: actorCreationDTO, actions: FormikHelpers<actorCreationDTO>): void;
}
