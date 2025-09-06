import React from 'react';
import Header from './components/Header.jsx';
import Introduction from './components/Introduction.jsx';
import Card from './components/Card.jsx';
import './App.css';

// --- Main App Component ---
// This is the root component that brings everything together.
export default function App() {
  // Data for the dynamic profile cards
  // This could come from an API in a real application
  const profiles = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Web Developer',
      imageUrl: 'https://placehold.co/256x256/E9D5FF/3730A3?text=JD&font=inter'
    },
    {
      id: 2,
      name: 'Eva Smith',
      title: 'UX Designer',
      imageUrl: 'https://placehold.co/256x256/FBCFE8/86198F?text=ES&font=inter'
    }
  ];

  return (
    // Using a React Fragment <> to return a single root element
    <>
      <div className="bg-gray-50 min-h-screen font-sans">
        <Header />
        <main className="container mx-auto px-4">
          <Introduction />
          
          {/* Profile Cards Section */}
          <div className="flex flex-wrap justify-center items-center gap-8 py-10">
            {/* We map over the 'profiles' array to dynamically render a Card for each person */}
            {profiles.map(profile => (
              <Card
                key={profile.id}
                name={profile.name}
                title={profile.title}
                imageUrl={profile.imageUrl}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
