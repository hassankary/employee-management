"use client";

import Link from "next/link";
import ButtonDelete from "./button";

interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  address: string;
  createdAt: Date;
}

export default function Tabel({ employee }: { employee: Employee[] }) {
  const tabelMenu = ["name", "role", "email", "address", "actions"];

  return (
    <table className="table table-zebra text-white">
      <thead>
        <tr>
          <th>No.</th>
          {tabelMenu.map((d) => (
            <th key={d}>{d}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employee.map((d, i) => (
          <tr key={d.name + i}>
            <th>{i + 1}</th>
            <td>{d.name}</td>
            <td>{d.role}</td>
            <td>{d.email}</td>
            <td>{d.address}</td>
            <td className="flex flex-col sm:flex-row justify-center items-center gap-2">
              <Link
                href={`/employee/edit/${d.id}`}
                className="w-full sm:w-fit btn btn-sm btn-outline btn-primary"
              >
                edit
              </Link>
              <ButtonDelete id={d.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
