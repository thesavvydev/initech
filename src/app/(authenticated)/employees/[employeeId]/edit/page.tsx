import Form from "next/form";
import { Employee } from "types";
import EditEmployeeForm from "./edit-employee-form";

export default async function Page({
  params,
}: {
  params: Promise<{ employeeId: string }>;
}) {
  const { employeeId } = await params;

  const employee: Employee = await fetch(
    `http://localhost:3000/api/employees/${employeeId}`
  ).then((res) => res.json());

  return (
    <>
      <h1 className="text-2xl font-bold">{`Edit ${employee.firstName} ${employee.lastName}`}</h1>
      <EditEmployeeForm employee={employee} />
    </>
  );
}
