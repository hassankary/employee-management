import Link from "next/link";
import { getEmployeelist } from "../../lib/action";
import ButtonDelete from "./components/button";

export default async function Home() {
  const tabelMenu = ["name", "role", "email", "address", "actions"];
  const employee = await getEmployeelist();

  return (
    <div className=" min-h-screen mx-auto container px-4 bg-white">
      <div className=" h-full w-full flex flex-col pt-8 pb-6 justify-center items-center">
        <div className="py-4 font-bold text-black text-3xl">
          Employee Management
        </div>
      </div>
      <div className=" flex pb-6 justify-center items-center">
        <Link href={"/employee/create"} className="btn btn-md btn-primary">
          Add New
        </Link>
      </div>
      <div className="flex flex-col overflow-x-auto bg-slate-700">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              {tabelMenu.map((d) => (
                <th key={d}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(employee)
              ? employee.map((d, i) => (
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
                ))
              : null}
          </tbody>
        </table>
        {Array.isArray(employee) && employee.length === 0 ? (
          <div className=" flex py-36 justify-center items-center">
            Data not found.
          </div>
        ) : null}
      </div>
    </div>
  );
}
