import { createAuthClient } from 'better-auth/react';

// Ensure we're using the correct URL in development
const getBaseURL = () => {
  if (typeof window !== 'undefined') {
    // Browser should use current origin
    return window.location.origin;
  }
  // Server-side or build time
  return process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
};

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
  fetchOptions: {
    credentials: 'include',
  },
});

export const {
  signIn,
  signUp,
  signOut,
  useSession
} = authClient;