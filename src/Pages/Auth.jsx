import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const { user, isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (user && isAuth) navigate('/');
  }, [navigate, user, isAuth]);

  return (
    <div className="min-w-full flex justify-center items-center px-2 dark:bg-zinc-900">
      <div className="md:grid md:grid-cols-2 overflow-hidden w-full sm:w-[500px] md:w-[900px] shadow-lg p-1.5 rounded-md bg-main">
        <Outlet />
      </div>
    </div>
  );
}
