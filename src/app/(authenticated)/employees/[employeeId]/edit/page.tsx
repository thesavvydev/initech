import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
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
      <div className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600">
        <HiChevronLeft />
        <Link href="/employees">Back to Employees</Link>
      </div>
      <h1 className="text-2xl font-bold">{`Edit ${employee.firstName} ${employee.lastName}`}</h1>
      <EditEmployeeForm employee={employee} />
    </>
  );
}
