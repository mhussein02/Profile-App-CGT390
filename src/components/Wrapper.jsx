import React from 'react';


export default function Wrapper({ children, title }) {
  return (
    <section className="container mx-auto px-4 py-8">
      {title && <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{title}</h2>}
      
      <div className="flex flex-wrap justify-center items-center gap-8">
        {children}
      </div>
    </section>
  );
}
