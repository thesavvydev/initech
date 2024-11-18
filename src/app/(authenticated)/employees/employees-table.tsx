"use client";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { STATUS_BADGE_COLORS } from "consts/status-badge-colors";
import {
  Avatar,
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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function sortEmployees(column: string, isAscending: boolean) {
  return (a: Employee, b: Employee) => {
    switch (column) {
      case "Name":
        return a.firstName.localeCompare(b.firstName) * (isAscending ? -1 : 1);
      case "Start Date":
        const timeDiff =
          new Date(a.dateStarted).getTime() - new Date(b.dateStarted).getTime();
        return timeDiff * (isAscending ? -1 : 1);
      case "Status":
        return a.status.localeCompare(b.status) * (isAscending ? -1 : 1);
      case "Quote":
        return a.quote.localeCompare(b.quote) * (isAscending ? -1 : 1);
      default:
        return a.firstName.localeCompare(b.firstName) * (isAscending ? -1 : 1);
    }
  };
}

function TableColumnHeaders({
  department,
  sortDepartmentColumn,
  sortDepartmentDirIsAscending,
}: {
  department: string;
  sortDepartmentColumn: string;
  sortDepartmentDirIsAscending: boolean;
}) {
  const columnHeaders = ["Name", "Start Date", "Quote", "Status"];

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleUpdateSortParams = (param: string) => () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(`sort_${department}_col`, param);
    newParams.set(
      `sort_${department}_dir`,
      sortDepartmentDirIsAscending ? "desc" : "asc"
    );

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  const isColumnAscending = (column: string) =>
    sortDepartmentColumn === column && sortDepartmentDirIsAscending;

  return (
    <TableHead>
      {columnHeaders.map((columnHeader) => {
        const SortingIcon = isColumnAscending(columnHeader)
          ? HiChevronDown
          : HiChevronUp;

        return (
          <TableHeadCell
            className="whitespace-nowrap cursor-pointer"
            key={columnHeader}
            onClick={handleUpdateSortParams(columnHeader)}
          >
            <div className="flex items-center gap-1">
              {columnHeader}
              <SortingIcon className="size-5" />
            </div>
          </TableHeadCell>
        );
      })}
    </TableHead>
  );
}

export default function EmployeesTable({
  department,
  employees,
}: {
  department: string;
  employees: Employee[];
}) {
  const searchParams = useSearchParams();
  const sortDepartmentColumn = searchParams.get(`sort_${department}_col`) ?? "";
  const sortDepartmentDirIsAscending =
    searchParams.get(`sort_${department}_dir`) === "asc";

  const sortedEmployees = employees.toSorted(
    sortEmployees(sortDepartmentColumn, sortDepartmentDirIsAscending)
  );

  return (
    <Card key={department} className="hidden lg:table">
      <h3 className="text-xl font-semibold">{department}</h3>
      <Table hoverable>
        <TableColumnHeaders
          department={department}
          sortDepartmentColumn={sortDepartmentColumn}
          sortDepartmentDirIsAscending={sortDepartmentDirIsAscending}
        />
        <TableBody>
          {sortedEmployees.map((employee) => (
            <TableRow
              key={employee.id}
              theme={{ hovered: "hover:bg-yellow-100" }}
            >
              <TableCell className="flex items-center gap-2 whitespace-nowrap">
                <Avatar
                  size="sm"
                  rounded
                  placeholderInitials={`${employee.firstName[0]}${employee.lastName[0]}`}
                />
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
