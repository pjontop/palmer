import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@workspace/ui/lib/utils";

const avatarVariants = cva(
  "relative flex size-10 shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "size-8",
        md: "size-10",
        lg: "size-12",
      },
      variant: {
        default: "",
        soft: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full font-medium",
  {
    variants: {
      color: {
        default: "bg-muted text-muted-foreground",
        accent: "bg-accent text-accent-foreground",
        success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        danger: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      },
      variant: {
        default: "",
        soft: "bg-opacity-50",
      },
    },
    defaultVariants: {
      color: "default",
      variant: "default",
    },
  }
);

interface AvatarContextValue {
  color?: VariantProps<typeof avatarFallbackVariants>["color"];
  variant?: VariantProps<typeof avatarVariants>["variant"];
  size?: VariantProps<typeof avatarVariants>["size"];
}

const AvatarContext = React.createContext<AvatarContextValue>({});

interface AvatarProps extends Omit<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, 'color'> {
  size?: VariantProps<typeof avatarVariants>["size"];
  color?: VariantProps<typeof avatarFallbackVariants>["color"];
  variant?: VariantProps<typeof avatarVariants>["variant"];
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, color, variant, ...props }, ref) => {
  const contextValue = React.useMemo(
    () => ({ color, variant, size }),
    [color, variant, size]
  );

  return (
    <AvatarContext.Provider value={contextValue}>
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(avatarVariants({ size, variant }), className)}
        {...props}
      />
    </AvatarContext.Provider>
  );
});
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square size-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = "Avatar.Image";

interface AvatarFallbackProps extends Omit<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>, 'color'> {
  color?: VariantProps<typeof avatarFallbackVariants>["color"];
}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, color: colorProp, ...props }, ref) => {
  const context = React.useContext(AvatarContext);
  const color = colorProp || context.color;
  const variant = context.variant;

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(avatarFallbackVariants({ color, variant }), className)}
      {...props}
    />
  );
});
AvatarFallback.displayName = "Avatar.Fallback";

// Compound component pattern
const AvatarNamespace = Object.assign(Avatar, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

export { AvatarNamespace as Avatar, AvatarImage, AvatarFallback };
