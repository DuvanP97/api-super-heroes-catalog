// Narrow error from 'unknown' to 'Error'
export function GetErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  } else {
    return JSON.stringify(error);
  }
}
