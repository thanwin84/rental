type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T | null;
  errors?: any | null;
};

export function apiResponse<T>({
  success,
  message,
  data = null,
  errors = null,
}: ApiResponse<T>): ApiResponse<T> {
  return {
    success,
    message,
    data,
    errors,
  };
}
