import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Container({ children }: Props) {
  return (
    <div className='max-w-full h-full mx-auto sm:p-6 lg:p-8'>{children}</div>
  );
}
