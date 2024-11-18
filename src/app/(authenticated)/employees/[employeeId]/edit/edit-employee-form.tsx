"use client";
import {
  Button,
  Card,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import toDateInputValue from "utils/toDateInputValue";
import { editEmployee } from "./actions";
import { Employee } from "types";
import Form from "next/form";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

export default function EditEmployeeForm({ employee }: { employee: Employee }) {
  return (
    <Card className="max-w-screen-sm">
      <Form action={editEmployee} className="grid gap-6">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <TextInput
            defaultValue={employee.firstName}
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <TextInput
            defaultValue={employee.lastName}
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
        <div>
          <Label htmlFor="dateStarted">Start Date</Label>
          <TextInput
            defaultValue={toDateInputValue(new Date(employee.dateStarted))}
            id="dateStarted"
            name="dateStarted"
            type="date"
          />
        </div>
        <div>
          <Label htmlFor="department">Department</Label>
          <Select
            defaultValue={employee.department}
            id="department"
            name="department"
          >
            <option value="">Select a department</option>
            <option value="Engineering">Engineering</option>
            <option value="Food Services">Food Services</option>
            <option value="Management">Management</option>
            <option value="Operations">Operations</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="quote">Quote</Label>
          <Textarea
            id="quote"
            name="quote"
            defaultValue={employee.quote}
            rows={4}
          />
        </div>
        <div>
          <SubmitButton />
        </div>
      </Form>
    </Card>
  );
}
