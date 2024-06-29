import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function ImageField(props: ImageFieldProps) {
    const [imageBase64, setImageBase64] = useState<string>('');
    const [imageURL, setImageURL] = useState(props.imageURL);
    const {values} = useFormikContext<any>();      

    const divStyle = { marginTop: '10px' };
    const imgStyle = { width: '450px' };

    const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.files) {
        const file = event.currentTarget.files[0];
        if (file) {
            try {
            const base64Representation = await toBase64(file);
            setImageBase64(base64Representation);
            } catch (error) {
            console.error(error);
            }
            values[props.field] = file;
            setImageURL('');
        } else {
            setImageBase64('');
        }
        }
    };

    const toBase64 = (file: File): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
        });
    };

    return (
        <div className="mb-3">
        <label>{props.displayName}</label>
        <div>
            <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleOnChange}
            />
        </div>
        {imageBase64 ? (
            <div>
            <div style={divStyle}>
                <img src={imageBase64} style={imgStyle} alt="preview" />
            </div>
            </div>
        ) : null}

        {imageURL ? (
            <div>
            <div style={divStyle}>
                <img src={imageURL} style={imgStyle} alt="preview" />
            </div>
            </div>
        ) : null}
        </div>
    );
    }

    interface ImageFieldProps {
    displayName: string;
    imageURL: string;
    field: string;
    }

    ImageField.defaultProps = {
        imageURL: ''
    }
