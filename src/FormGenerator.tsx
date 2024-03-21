import React from 'react';
import { ParseBasicType } from './TypeParser';

type FormFieldProps<T> = {
  type: T;
  label: string;
  onChange: (value: T) => void;
};

function FormField<T>({ type, label, onChange }: FormFieldProps<T>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value: any = event.target.value;
    if (type === "boolean") {
      value = event.target.checked;
    } else if (type === "number") {
      value = parseFloat(value);
    }
    onChange(value);
  };

  return (
    <label>
      {label}:
      <input
        type={type === "boolean" ? "checkbox" : type === "number" ? "number" : "text"}
        onChange={handleChange}
      />
    </label>
  );
}

export function FormGenerator({ typeString }: { typeString: string }) {
  const fieldType = typeString as ParseBasicType<string>;

  return (
    <form>
      <FormField
        type={fieldType}
        label={`Enter a ${typeString}`}
        onChange={(value) => console.log(value)}
      />
    </form>
  );
}
