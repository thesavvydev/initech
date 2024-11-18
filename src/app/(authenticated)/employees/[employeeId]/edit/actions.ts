"use server";

export async function editEmployee(formData: FormData) {
  const { dateStarted, department, firstName, lastName, quote } =
    Object.fromEntries(formData);

  console.log({ dateStarted, department, firstName, lastName, quote });
}
