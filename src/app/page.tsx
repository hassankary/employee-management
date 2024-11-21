import Link from "next/link";
import { getEmployeelist } from "../../lib/action";
import Tabel from "./components/tabel";

export default async function Home() {
  const employee = await getEmployeelist();

  const validEmployeeData = Array.isArray(employee) ? employee : [];

  return (
    <div className=" min-h-screen mx-auto container px-4 bg-white">
      <div className=" h-full w-full flex flex-col pt-8 pb-6 justify-center items-center">
        <div className="py-4 font-bold text-black text-3xl sm:text-4xl">
          <span className=" text-[#6F7AFB]">Employee</span> Management
        </div>
      </div>
      <div className="flex pb-6 justify-center items-center">
        <Link
          href={"/employee/create"}
          className="btn btn-md btn-primary text-white"
        >
          Add New
        </Link>
      </div>
      <div className="flex flex-col overflow-x-auto bg-slate-700">
        <Tabel employee={validEmployeeData} />
        {validEmployeeData.length === 0 ? (
          <div className=" flex py-36 justify-center items-center">
            Data not found.
          </div>
        ) : null}
      </div>
    </div>
  );
}
