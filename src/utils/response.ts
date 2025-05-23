export type ServerActionResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: {
    code?: string;
    message: string;
    details?: unknown;
  };
};

export function success<T>(data: T): ServerActionResponse<T> {
  return {
    success: true,
    data,
  };
}

export function failure(
  message: string,
  code?: string,
  details?: unknown
): ServerActionResponse {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
  };
}
