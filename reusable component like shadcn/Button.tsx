import { cva } from "class-variance-authority";
import { cn } from "./cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"; // this name we can give whatever we want to
};

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <button {...props} className={cn(buttonVariants({ variant }),className)} />;
}

const buttonVariants = cva(
  "py-2 px-4 rounded-md font-semibold hover:opacity-50",
  {
    variants: {
      // but this name,variants,it is immutable since it is coming from library
      variant: {
        primary: "bg-gradient-to-r from-primary-500 to-primary-700 text-black",
        secondary: "bg-slate-500 text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
); // for applying default styles then adding some specific variants
