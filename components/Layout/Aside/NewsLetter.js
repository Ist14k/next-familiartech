import React from 'react';

const NewsLetter = () => {
  return (
    <div className="w-full bg-gray-100 rounded flex flex-col gap-6 p-7">
      <h5 className="uppercase text-lg font-bold">Subscribe</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        atque?
      </p>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 px-3 rounded"
        />
        <input
          type="submit"
          value="SUBSCRIBE"
          className="p-2 text-white bg-amber-500 rounded"
        />
      </form>
    </div>
  );
};

export default NewsLetter;
