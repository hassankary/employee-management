"use client";
import { useFormState } from "react-dom";
import { saveEmployee } from "../../../../lib/action";

export default function AddEmployee() {
  const [state, formAction] = useFormState(saveEmployee, null);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white text-white">
      <div className="px-10 py-8 space-y-6 bg-slate-900 rounded-lg">
        <h1 className="mx-auto font-bold text-center ">New Employee</h1>
        <form action={formAction} className="flex flex-col gap-1 sm:w-[250px]">
          <div>
            <label
              htmlFor="name"
              className="block mb-0.5 text-xs font-medium text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="input input-bordered input-sm input-info w-full max-w-xs"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-0.5 text-[10px] text-red-500">
                {state?.Error?.name}
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="role"
              className="block mb-0.5 text-xs font-medium text-white"
            >
              Role
            </label>
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Role"
              className="input input-bordered input-sm input-info w-full max-w-xs"
            />
            <div id="role-error" aria-live="polite" aria-atomic="true">
              <p className="mt-0.5 text-[10px] text-red-500">
                {state?.Error?.role}
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-0.5 text-xs font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input input-bordered input-sm input-info w-full max-w-xs"
            />
            <div id="email-error" aria-live="polite" aria-atomic="true">
              <p className="mt-0.5 text-[10px] text-red-500">
                {state?.Error?.email}
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-0.5 text-xs font-medium text-white"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              className="input input-bordered input-sm input-info w-full max-w-xs"
            />
            <div id="address-error" aria-live="polite" aria-atomic="true">
              <p className="mt-0.5 text-[10px] text-red-500">
                {state?.Error?.address}
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-sm btn-primary mt-4 text-white"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
