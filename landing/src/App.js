import React from 'react';
import './App.css';

import Shapes from "@brgman/shapes";
import "@brgman/shapes/dist/styles.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Confetti Component Features</h2>
          <p className="text-base text-gray-600">
            Discover the powerful features of our reusable confetti effect component
          </p>
        </header>

        <section className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Component Demo</h2>
          <div className="border p-4 rounded bg-gray-50">
            <Shapes total={1000} />
          </div>
        </section>

        <section className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Elements for creating a confetti effect</li>
            <li>Ability to control the number of elements</li>
            <li>Ability to control the duration of the component's operation</li>
            <li>Elements smoothly fade out during animation completion</li>
            <li>Support for .ts typing</li>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
