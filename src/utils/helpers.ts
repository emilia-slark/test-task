import { FieldError } from "react-hook-form";

export function getStatusMetascore(value: number): 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast' | null | undefined  {
  if (value < 50)
    return 'danger'
  else if (value > 50 && value < 75)
    return 'warning'
  else if (value > 75 && value < 100)
    return 'success'
  else return 'info'
}

export const handleValidStyle = (field: FieldError | undefined): string => field ? "p-invalid" : "";
