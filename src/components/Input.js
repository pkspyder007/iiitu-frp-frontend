import React from "react";

export default function Input({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
  secondLabel,
  secondLabelLink,
  ...rest
}) {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <div className="text-sm font-bold text-gray-700 tracking-wide">
          {label}
        </div>
        {secondLabel && (
          <div>
            <a
              href={secondLabelLink}
              className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                    cursor-pointer"
            >
              {secondLabel}
            </a>
          </div>
        )}
      </div>
      <input
        name={name}
        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
