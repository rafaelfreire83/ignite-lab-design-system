import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props:TextInputRootProps) {
  return(
    <div
      className={clsx(
        'flex items-center gap-2 py-4 px-3 h-14 rounded bg-gray-800 text-white w-full text-xs placeholder:text-gray-400 focus-within:ring-2 ring-purple-300'
      )}
    >{props.children}</div>
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props:TextInputIconProps) {
  return(
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputProps) {
  return (
      <input 
        className={clsx(
          'bg-transparent flex-1 outline-none'
        )}
        {...props}
      />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}