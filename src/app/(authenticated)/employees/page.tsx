import { Badge, Button, Card, TextInput } from "flowbite-react";
import Form from "next/form";
import Link from "next/link";
import { Fragment } from "react";
import { HiX } from "react-icons/hi";
import { Employee } from "types";
import groupBy from "utils/groupBy";
import EmployeeCards from "./employee-cards";
import EmployeesTable from "./employees-table";

export const metadata = {
  title: "Initech Employees",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const { search } = await searchParams;
  const employees: Employee[] = await fetch(
    `http://localhost:3000/api/employees`
  ).then((res) => res.json());

  const filteredEmployees = employees.filter((employee) => {
    if (!search) return true;
    const searchableString = Object.values(employee).join(" ").toLowerCase();
    return searchableString.includes(search.toLowerCase());
  });

  const employeesGroupedByDepartment = groupBy(
    filteredEmployees,
    (employee) => employee.department
  );

  return (
    <>
      <h1 className="text-2xl font-bold">Employees</h1>
      <Card>
        {search && (
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Currently searching for:</span>
            <Link href="/employees">
              <Badge>
                <div className="flex items-center gap-2">
                  {search}
                  <HiX />
                </div>
              </Badge>
            </Link>
          </div>
        )}
        <Form action="/employees">
          <fieldset className="flex items-center gap-2">
            <TextInput className="w-full" name="search" />
            <Button>Search</Button>
          </fieldset>
        </Form>
      </Card>
      {Object.entries(employeesGroupedByDepartment).map(
        ([department, employees]) => (
          <Fragment key={department}>
            <EmployeeCards employees={employees} department={department} />
            <EmployeesTable employees={employees} department={department} />
          </Fragment>
        )
      )}
    </>
  );
}
