import { useFormikContext, Field } from "formik";

export default function DateField(props: dateFieldProps) {
    const { values, validateForm, setFieldValue, touched, errors } = useFormikContext<any>();

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(e.currentTarget.value + 'T00:00:00');
        setFieldValue(props.field, date);
        validateForm();
    };

    return (
        <div className="mb-3">
            <label htmlFor={props.field}>{props.displayName}</label>
            <Field
                type="date"
                className="form-control"
                name={props.field}
                id={props.field}
                value={values[props.field] ? new Date(values[props.field]).toISOString().split('T')[0] : ''}
                onChange={handleDateChange}
            />
            {touched[props.field] && errors[props.field] ? (
                <div className="text-danger">{errors[props.field]?.toString()}</div>
            ) : null}
        </div>
    );
}

interface dateFieldProps {
    field: string;
    displayName: string;
}
