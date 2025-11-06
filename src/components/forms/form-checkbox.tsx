"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface FormCheckboxProps
  extends React.InputHTMLAttributes<HTMLButtonElement> {
  label?: string;
  error?: boolean;
}

const FormCheckbox = forwardRef<HTMLButtonElement, FormCheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox
          className={cn(
            error && "border-destructive data-[state=checked]:bg-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              error && "text-destructive"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

FormCheckbox.displayName = "FormCheckbox";

export { FormCheckbox };



