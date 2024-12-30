import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListPage from './views/UserListPage';
import UserDetailPage from './views/UserDetailPage';
import HistoryPage from './views/HistoryPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/user/:userId" element={<UserDetailPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
