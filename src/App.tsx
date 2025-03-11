import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PostPage } from './pages/PostPage';
import { Jobs } from './pages/Jobs';
import { JobDetails } from './pages/JobDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/job-details" element={<JobDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;