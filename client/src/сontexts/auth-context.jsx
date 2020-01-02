import React from 'react';

export const AuthContext = React.createContext({
  login: '',
  password: '',
  isVerified: false,
});
