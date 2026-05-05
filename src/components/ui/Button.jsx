import React from "react";
import { cn } from "../../lib/utils";

// Size variants
const sizeClasses = {
  sm: "text-sm px-4 py-2",
  md: "text-md px-6 py-2.5",
  lg: "md:text-xl text-sm px-4 md:px-8 py-2 md:py-3",
  xl: "lg:text-2xl lg:px-10 lg:py-3.5 md:text-lg md:px-8 md:py-3 text-base px-6 py-2.5",
};

// Variant styles with unique hover effects
const variantClasses = {
  primary: `btn-hover-pulse border-1 border-transparent bg-size-[100%_auto] text-primry bg-gold-300 rounded-full transition duration-300 ease-in-out shadow-xl hover:bg-right hover:bg-size-[100%_auto] hover:shadow-[rgba(230,200,154,0.8)]`,
  outline: `border-2 border-primary text-primary bg-transparent relative z-10 overflow-hidden rounded-full transition-all duration-300 ease-linear before:absolute before:-z-10 before:inset-0 before:bg-primary before:origin-center before:rounded-full before:scale-0 before:transition-all before:duration-300 before:ease-linear hover:before:scale-150 hover:text-gold-100`,
};

const Button = React.forwardRef(
  (
    {
      children,
      className = "",
      size = "md",
      variant = "primary",
      fullWidth = false,
      icon: Icon,
      iconPosition = "right",
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    // Base styles applied to every button
    const baseClasses = cn(
      "inline-flex items-center justify-center cursor-pointer rounded-full font-medium transition-all duration-300 ease-in-out",
      "hover:scale-[0.9] hover:-translate-y-[2px]",
      "disabled:opacity-50 disabled:pointer-events-none",
      "relative overflow-hidden",
      sizeClasses[size],
      variantClasses[variant],
      fullWidth && "w-full",
      className,
    );

    return (
      <button ref={ref} className={baseClasses} disabled={isLoading} {...props}>
        {children}
      </button>
    );
  },
);

export const PrimaryButton = ({ className, ...props }) => (
  <Button variant="primary" className={className} {...props} />
);
export const OutlineButton = ({ className, ...props }) => (
  <Button variant="outline" className={className} {...props} />
    
);

Button.displayName = "Button";

export default Button;
