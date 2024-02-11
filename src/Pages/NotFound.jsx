import { useSelector } from 'react-redux';

import LinkOutline from '@UI/Links/LinkOutline';
import ContainerRounded from '@UI/Containers/ContainerRounded';

export default function NotFound() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const path = isAuthenticated ? '/' : '/user/sign-in';
  return (
    <div className="flex flex-col justify-center items-center min-h-full min-w-full">
      <ContainerRounded className="items-center p-10 md:p-16">
        <h1 className="text-6xl md:text-[10em] leading-none">404</h1>
        <h2 className="text-3xl md:text-[4em] mb-8">Page Not Found</h2>
        <LinkOutline to={path}>Go to home page</LinkOutline>
      </ContainerRounded>
    </div>
  );
}
