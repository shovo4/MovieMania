import { Field, Formik, Form } from "formik";
import { genreDTO } from "../genres/genres.model";
import Button from "../utils/Button";

export default function FilterMovies() {
  const initialValues: FilterMoviesForm = {
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false
  }

  const genres: genreDTO[] = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Adventure' }
  ];

  return (
    <>
      <h3>Filter Movies</h3>
      <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {(formikProps) => (
          <Form>
            <div className="row gx-3 align-items-center">
              <div className="col-auto">
                <Field 
                  type="text" 
                  className="form-control" 
                  id="title"
                  name="title"
                  placeholder="Title of the movie"
                />
              </div>
              <div className="col-auto">
                <Field 
                  as="select"
                  className="form-select"
                  name="genreId"
                >
                  <option value="0">-- Select a genre --</option>
                  {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                  ))}
                </Field>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <Field 
                    className="form-check-input" 
                    type="checkbox" 
                    id="upcomingReleases" 
                    name="upcomingReleases" 
                  />
                  <label className="form-check-label" htmlFor="upcomingReleases">
                    Upcoming Releases
                  </label>
                </div>  
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <Field 
                    className="form-check-input" 
                    type="checkbox" 
                    id="inTheaters" 
                    name="inTheaters" 
                  />
                  <label className="form-check-label" htmlFor="inTheaters">
                    In Theaters
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <Button className="btn btn-primary" type="submit">Filter</Button>
                <Button className="btn btn-danger ms-3" type="button" onClick={() => formikProps.setValues(initialValues)}>Clear</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

interface FilterMoviesForm {
  title: string;
  genreId: number;
  upcomingReleases: boolean;
  inTheaters: boolean;
}
