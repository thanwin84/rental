export function getFormValues(formData: FormData) {
  return Object.fromEntries(formData.entries());
}
