import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import authOperations from '../../redux/auth/operations';

import { Layout } from 'components/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import ContactsView from 'components/views/ContactsView';
import HomeView from 'components/views/HomeView';
import LoginView from 'components/views/LoginView';
import RegisterView from 'components/views/RegisterView';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterView} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginView} redirectTo="/contacts" />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsView} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};
