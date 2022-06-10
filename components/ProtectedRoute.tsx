import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      toast.error('Please Sign In', { duration: 5000 });
      router.push('/auth/login');
    }
  }, [router, status]);

  if (status === 'unauthenticated') return null;

  return <>{children}</>;
};

export default ProtectedRoute;
