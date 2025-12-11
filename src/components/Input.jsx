import React, { forwardRef } from "react";

/**
 * Komponen input serbaguna: text, checkbox, atau radio.
 *
 * @param {Object} props
 * @param {string} props.label - Label input.
 * @param {string} props.name - Nama input.
 * @param {string} props.type - Jenis input: 'text', 'checkbox', 'radio'.
 * @param {string} [props.value] - Value untuk radio button.
 * @param {string} [props.placeholder] - Placeholder untuk input text.
 * @param {boolean} [props.required] - Tampilkan tanda bintang jika wajib.
 * @param {string} [props.error] - Pesan error.
 * @param {React.Ref} ref - Ref dari react-hook-form.
 */

const Input = forwardRef(
  (
    { label, name, type, value, placeholder, required, error, ...rest },
    ref
  ) => {
    const inputClass = "text-gray-700 focus:ring-2 focus:outline-none";

    if (type === "checkbox") {
      return (
        <div className="mb-4">
          <label className="block items-center">
            {required && <span className="text-red-500"></span>} {label}
          </label>
          <input
            type="checkbox"
            name={name}
            ref={ref}
            {...rest}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      );
    }

    if (type === "radio") {
      return (
        <div className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={value}
              ref={ref}
              {...rest}
              className="form-radio text-blue-600 h-4 w-4"
            />
            <span className="ml-2 text-gray-700">{label}</span>
          </label>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      );
    }

    // Default: text input
    return (
      <div className="mb-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {required && <span className="text-red-500"></span>} {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          className={`w-full px-4 py-2 border rounded-lg mt-3 ${inputClass} ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default Input;
