import { STATUS_BADGE_COLORS } from "consts/status-badge-colors";
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

export default function EmployeesTable({
  department,
  employees,
}: {
  department: string;
  employees: Employee[];
}) {
  return (
    <Card key={department} className="hidden md:table">
      <h3 className="text-xl font-semibold">{department}</h3>
      <Table hoverable>
        <TableHead>
          <TableHeadCell className="whitespace-nowrap">Name</TableHeadCell>
          <TableHeadCell className="whitespace-nowrap">
            Start Date
          </TableHeadCell>
          <TableHeadCell className="whitespace-nowrap">Quote</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="flex items-center gap-2 whitespace-nowrap">
                <Link
                  className="text-sky-600"
                  href={`/employees/${employee.id}/edit`}
                >{`${employee.firstName} ${employee.lastName}`}</Link>
              </TableCell>
              <TableCell>
                <p className="xl:hidden">
                  {new Intl.DateTimeFormat("en-us", {
                    dateStyle: "short",
                  }).format(new Date(employee.dateStarted))}
                </p>
                <p className="hidden xl:table-cell">
                  {new Intl.DateTimeFormat("en-us", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(employee.dateStarted))}
                </p>
              </TableCell>
              <TableCell>
                <p className="text-ellipsis">{employee.quote}</p>
              </TableCell>
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
  );
}
