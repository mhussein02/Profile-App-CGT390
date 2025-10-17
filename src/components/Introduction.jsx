import React from 'react';

const Introduction = () => {
  const title = "About";
  const introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  const sectionClass = "text-center py-12 px-6";
  const titleClass = "text-4xl font-extrabold text-gray-800 mb-4";
  const textClass = "text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed";

  return (
    <section className={sectionClass}>
      <h2 className={titleClass}>{title}</h2>
      <p className={textClass}>{introText}</p>
    </section>
  );
};

export default Introduction;
