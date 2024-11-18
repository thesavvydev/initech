"use client";

import { Alert } from "flowbite-react";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

export default function Error() {
  return (
    <>
      <div className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600">
        <HiChevronLeft />
        <Link href="/employees">Back to Employees</Link>
      </div>
      <Alert color="red">
        There was an error fetching the employee. Please try again.
      </Alert>
    </>
  );
}
