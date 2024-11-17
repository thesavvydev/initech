import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Link from "next/link";
import { Employee } from "types";
import groupBy from "utils/groupBy";

export const metadata = {
  title: "Initech Employees",
};

const STATUS_BADGE_COLORS = {
  active: "success",
  inactive: "warning",
};

export default async function Page() {
  const employees: Employee[] = await fetch(
    `http://localhost:3000/api/employees`
  ).then((res) => res.json());

  const employeesGroupedByDepartment = groupBy(
    employees,
    (employee) => employee.department
  );

  return (
    <>
      <h1 className="text-2xl font-bold">Employees</h1>
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
