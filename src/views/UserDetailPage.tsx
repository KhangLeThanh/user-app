import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers, fetchCartDetails, setHistory } from "../store/userSlice";
import { RootState, AppDispatch } from "../store/store";

export default function UserDetailPage() {
  const { userId } = useParams<{ userId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { users, carts, history } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (userId) {
      const numericUserId = Number(userId);

      // Fetch users if they are not already loaded
      if (users.length === 0) {
        dispatch(fetchUsers());
      }

      // Fetch cart details for the selected user
      dispatch(fetchCartDetails(numericUserId));

      // Add userId to history if not already present
      if (!history.includes(numericUserId)) {
        dispatch(setHistory(numericUserId));
      }
    }
  }, [userId, dispatch, users, history]);
  const user = users.find((user) => user.id === Number(userId));
  const cart = carts?.[Number(userId)];

  return (
    <div>
      <h2>User and Cart Details</h2>

      {/* Display user details */}
      {user ? (
        <div>
          <h3>User ID: {userId}</h3>
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Date of birth:</strong> {user.birthDate}
          </p>
          <p>
            <strong>Card Number:</strong> {user.bank.cardNumber}
          </p>
          <p>
            <strong>Card Expiry:</strong> {user.bank.cardExpire}
          </p>
        </div>
      ) : (
        <p>User details not available</p>
      )}

      {/* Display cart details */}
      {cart ? (
        <div>
          <h4>Cart Details</h4>
          <p>
            <strong>Total:</strong> {cart.total}
          </p>
          <p>
            <strong>Total Products:</strong> {cart.totalProducts}
          </p>
          <p>
            <strong>Total Quantity:</strong> {cart.totalQuantity}
          </p>
        </div>
      ) : (
        <p>Cart details not available</p>
      )}
    </div>
  );
}
