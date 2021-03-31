import React from "react";

function BtnLg({ title, ...rest }) {
  return (
    <div className="mt-10">
      <button
        {...rest}
        className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                            shadow-lg"
      >
        {title}
      </button>
    </div>
  );
}

export {
    BtnLg
}
