import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';

export default function HistoryPage(){
  const { history, users } = useSelector((state: RootState) => state.user);
  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map((userId) => {
          const user = users?.[userId]; 
          if (!user) return null;
          return (
            <li key={userId}>
              <Link to={`/user/${userId}`}>
                {user.firstName} {user.lastName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
