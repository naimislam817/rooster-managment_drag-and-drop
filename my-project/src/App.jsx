import React from 'react';
import Header from './components/Header';
import RosterContainer from './components/Roster/RosterContainer';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <RosterContainer />
      <Instructions />
    </div>
  );
}

export default App;