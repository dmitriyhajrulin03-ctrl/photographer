"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type FormFieldProps = {
  label?: string;
  description?: string;
  error?: string;
  children: ReactNode;
  className?: string;
};

export function FormField({
  label,
  description,
  error,
  children,
  className,
}: FormFieldProps) {
  return (
    <FormItem className={cn("space-y-2", className)}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>{children}</FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      {error && <FormMessage>{error}</FormMessage>}
    </FormItem>
  );
}





