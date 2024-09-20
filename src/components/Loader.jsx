import React from "react";

const Loader = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-900 fixed top-0 left-0 flex items-center justify-center z-50">
        <div class="loader"></div>
      </div>
    </>
  );
};

export default Loader;
