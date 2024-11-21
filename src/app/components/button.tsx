"use client";

import { deleteEmployee } from "../../../lib/action";

export default function ButtonDelete({ id }: { id: string }) {
  const deleteHandler = () => {
    const confirmed = confirm("Are your sure?");

    if (confirmed) {
      deleteEmployee(id);
    }
  };

  return (
    <button
      onClick={deleteHandler}
      className="w-full sm:w-fit btn btn-sm btn-outline btn-error"
    >
      delete
    </button>
  );
}
