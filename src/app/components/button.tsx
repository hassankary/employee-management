"use client";

import { deleteEmployee } from "../../../lib/action";

export default function ButtonDelete({ id }: { id: string }) {
  return (
    <button
      onClick={() => deleteEmployee(id)}
      className="w-full sm:w-fit btn btn-sm btn-outline btn-error"
    >
      delete
    </button>
  );
}
