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
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import { useState } from "react";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";

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

    const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheaters, setSelectedMovieTheaters] = useState(mapToModel(props.selectedMovieTheaters));
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState(mapToModel(props.nonSelectedMovieTheaters));

    function mapToModel(item: {id: number, name: string}[]): multipleSelectorModel[] {
        return item.map(item => { 
            return {key: item.id, value: item.name }
        });
    }

    return (
        <Formik
            initialValues={props.model}
            onSubmit={(values, actions) => {
                values.genresIds = selectedGenres.map(item => item.key);
                values.movieTheatersIds = selectedMovieTheaters.map(item => item.key);
                props.onSubmit(values, actions)
            }}
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
                    <MultipleSelector displayName="Genres" nonSelected={nonSelectedGenres} selected={selectedGenres} onChange={(selected, nonSelected) => {
                        setSelectedGenres(selected);
                        setNonSelectedGenres(nonSelected);
                    }} />
                    <MultipleSelector displayName="Movie Theaters" nonSelected={nonSelectedMovieTheaters} selected={selectedMovieTheaters} onChange={(selected, nonSelected) => {
                        setSelectedMovieTheaters(selected);
                        setNonSelectedMovieTheaters(nonSelected);
                    }} />

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
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
}