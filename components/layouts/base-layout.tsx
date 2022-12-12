import { FC } from 'react';

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <div className='bg-black flex h-screen w-screen'>{children}</div>;
};

export default BaseLayout;
