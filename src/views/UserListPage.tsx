import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchUsers, setHistory } from "../store/userSlice";
import {cardStyles} from "../styles/cardStyles";
import { Link } from "react-router-dom";

export default function UserListPage (){
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { users } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserClick = (userId: number) => {
    dispatch(setHistory(userId));
    navigate(`/user/${userId}`);
  };

  return (
    <div>
      <h2>User List</h2>
      <Link to={`history`}>History</Link>
      <ul style={cardStyles.ul}>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user.id)}
            style={cardStyles.li}
          >
            <div style={cardStyles.userCard}>
              <img
                style={cardStyles.image}
                src={user.image}
                alt={user.firstName}
                width={50}
              />
              <div style={cardStyles.info}>
                <p>
                  Name: {user.firstName} {user.lastName}
                </p>
                <p>
                  Bank Card: {user.bank.cardNumber} - {user.bank.cardExpire}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
