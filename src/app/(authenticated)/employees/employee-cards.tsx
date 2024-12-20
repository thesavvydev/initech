import { STATUS_BADGE_COLORS } from "consts/status-badge-colors";
import { Avatar, Card } from "flowbite-react";
import Link from "next/link";
import { Employee } from "types";

export default function EmployeeCards({
  department,
  employees,
}: {
  department: string;
  employees: Employee[];
}) {
  return (
    <>
      <h3 className="text-xl font-semibold lg:hidden">{department}</h3>
      <div className="grid sm:grid-cols-2 gap-4 lg:hidden" role="group">
        {employees.map((employee) => (
          <Link href={`/employees/${employee.id}/edit`} key={employee.id}>
            <Card
              role="listitem"
              aria-label={`${employee.firstName} ${employee.lastName}`}
            >
              <Avatar
                bordered
                color={
                  STATUS_BADGE_COLORS[
                    employee.status as keyof typeof STATUS_BADGE_COLORS
                  ]
                }
                placeholderInitials={`${employee.firstName[0]}${employee.lastName[0]}`}
                rounded
                size="lg"
              />
              <div>
                <p className="text-center font-bold text-xl text-gray-700">{`${employee.firstName} ${employee.lastName}`}</p>
                <p className="text-center text-gray-500">{`Started ${new Intl.DateTimeFormat(
                  "en-us",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                ).format(new Date(employee.dateStarted))}`}</p>
              </div>
              <blockquote className="bg-gray-50 p-4 border border-gray-200 text-center">
                {employee.quote}
              </blockquote>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
