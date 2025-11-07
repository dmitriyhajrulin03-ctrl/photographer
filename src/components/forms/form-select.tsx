"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type FormSelectProps = {
  placeholder?: string;
  options: { value: string; label: string }[];
  error?: boolean;
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
};

export function FormSelect({
  placeholder = "Select...",
  options,
  error,
  className,
  value,
  onValueChange,
  disabled,
}: FormSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger
        className={cn(
          error && "border-destructive focus:ring-destructive",
          className
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}





