import {
  Badge,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
} from "flowbite-react";
import Form from "next/form";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import { Employee } from "types";
import groupBy from "utils/groupBy";

export const metadata = {
  title: "Initech Employees",
};

const STATUS_BADGE_COLORS = {
  active: "success",
  inactive: "warning",
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
          <Card key={department}>
            <h3>{department}</h3>
            <Table hoverable>
              <TableHead>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Start Date</TableHeadCell>
                <TableHeadCell>Quote</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <Link
                        className="text-sky-600"
                        href={`/employees/${employee.id}/edit`}
                      >{`${employee.firstName} ${employee.lastName}`}</Link>
                    </TableCell>
                    <TableCell>
                      {new Intl.DateTimeFormat("en-us", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }).format(new Date(employee.dateStarted))}
                    </TableCell>
                    <TableCell>{employee.quote}</TableCell>
                    <TableCell className="capitalize w-0">
                      <Badge
                        color={
                          STATUS_BADGE_COLORS[
                            employee.status as keyof typeof STATUS_BADGE_COLORS
                          ]
                        }
                      >
                        {employee.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )
      )}
    </>
  );
}
