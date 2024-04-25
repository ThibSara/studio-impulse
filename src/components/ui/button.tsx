import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `px-4 rounded-sm font-medium text-sm
  inline-flex items-center justify-center whitespace-nowrap ring-offset-background
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
  transition-all duration-200 ease-in-out transform active:translate-y-0 transition-colors
  disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default:
          'bg-primary/95 text-primary-foreground shadow-sm hover:bg-primary/90 active:bg-primary active:bg-primary hover:shadow-lg active:shadow-sm hover:translate-y-[-1px]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:translate-y-[-1px]',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md active:shadow-sm active:bg-background hover:translate-y-[-1px]',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-sm active:shadow-sm',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
