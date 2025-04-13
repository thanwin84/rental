type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T | null;
  errors?: unknown | null;
  status: number;
};

export function apiResponse<T>({
  success,
  message,
  data = null,
  errors = null,
  status,
}: ApiResponse<T>): ApiResponse<T> {
  return {
    success,
    message,
    data,
    errors,
    status,
  };
}
