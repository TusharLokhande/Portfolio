import React, { FC } from "react";

interface InputProps {
  value?: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: "text" | "email" | "textarea" | "password";
  className?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}

const InputForm: FC<InputProps> = ({
  value,
  onChange,
  type,
  className,
  id,
  placeholder,
  required = false,
  name = "",
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default InputForm;
