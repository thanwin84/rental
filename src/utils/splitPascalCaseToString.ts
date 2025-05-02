export function splitPascalCaseToString(input: string): string {
  const words = input.match(/[A-Z]?[a-z]+|[A-Z]+(?![a-z])/g) || [];
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
