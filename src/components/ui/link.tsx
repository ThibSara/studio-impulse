import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import NextLink, { type LinkProps } from 'next/link';
import React from 'react';


const linkVariants = cva(
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
                    'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-md active:shadow-sm hover:translate-y-[-1px]',
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

export interface LinkButtonProps
    extends LinkProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, 'href'>,
    VariantProps<typeof linkVariants> {
    asChild?: boolean;
}


const Link = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <NextLink
                className={cn(linkVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Link.displayName = 'Link';

export { Link, linkVariants };