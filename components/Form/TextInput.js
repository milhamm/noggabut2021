import React from 'react';

const TextInput = React.forwardRef(
  ({ type, className, value, name, ...rest }, ref) => {
    const inputClassname = `${className} w-full bg-white py-3 rounded-lg border-black border-2 px-6 mt-3 mb-8 focus:border-black`;

    if (type === 'textarea') {
      return (
        <textarea
          ref={ref}
          name={name}
          type={type}
          className={inputClassname}
          value={value}
          {...rest}
        />
      );
    }

    return (
      <input
        ref={ref}
        name={name}
        type={type}
        className={inputClassname}
        autoComplete='false'
        value={value}
        {...rest}
      />
    );
  }
);

export default TextInput;
