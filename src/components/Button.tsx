import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}


export function Button({children, asChild}: ButtonProps) {
  
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={clsx(
      'py-4 px-3 bg-purple-400 rounded text-black font-medium text-sm font-sans w-full hover:bg-purple-300 transition-colors',
    )}>
      {children}
    </Comp>
  )
}
