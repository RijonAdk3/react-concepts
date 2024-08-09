import React from 'react';

const Card = ({ path, title, descriptionPlaceholder }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300 p-4">
      <img className="w-16 mx-auto" src={path} alt="Card image" />
      <div className="mt-4 text-center">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
      </div>
      <div className="mt-4 text-center">
        <textarea
          placeholder={descriptionPlaceholder}
          className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
        />
      </div>
      <div className="text-center mt-4">
        <button className="bg-gray-800 text-white py-1 px-4 rounded">Submit</button>
      </div>
    </div>
  );
};

export default Card;
