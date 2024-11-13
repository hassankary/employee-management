"use client";
import { useEffect, useState } from "react";

interface EmployeeData {
  name: string;
  role: string;
  email: string;
  address: string;
}

export default function Home() {
  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    name: "",
    role: "",
    email: "",
    address: "",
  });
  const [employeeList, setEmployeeList] = useState<EmployeeData[]>([]);

  const tabelMenu = ["name", "role", "email", "address", "actions"];

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (employeeData.name.trim() === "") {
      console.log("form cannot be empty");
      return;
    }

    setEmployeeList([...employeeList, employeeData]);

    setEmployeeData({
      name: "",
      role: "",
      email: "",
      address: "",
    });
  };

  useEffect(() => {
    console.log("employeeList =>", employeeList);
  }, [employeeList]);

  return (
    <div className=" min-h-screen mx-auto container px-4 bg-white">
      <div className=" h-full w-full flex flex-col py-8 justify-center items-center">
        <div className="mb-8 py-4 font-bold text-black text-3xl">
          Employee Management
        </div>
        <form onSubmit={handelSubmit} className="flex gap-x-2">
          <input
            type="text"
            placeholder="Name"
            value={employeeData.name}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, name: e.target.value })
            }
            className="input input-bordered input-sm input-info w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Role"
            value={employeeData.role}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, role: e.target.value })
            }
            className="input input-bordered input-sm input-info w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Email"
            value={employeeData.email}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, email: e.target.value })
            }
            className="input input-bordered input-sm input-info w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Address"
            value={employeeData.address}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, address: e.target.value })
            }
            className="input input-bordered input-sm input-info w-full max-w-xs"
          />
          <button type="submit" className="btn btn-sm btn-primary">
            Add
          </button>
        </form>
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
            {employeeList?.map((d, i) => (
              <tr key={d.name + i}>
                <th>{i + 1}</th>
                <td>{d.name}</td>
                <td>{d.role}</td>
                <td>{d.email}</td>
                <td>{d.address}</td>
                <td className="flex flex-col sm:flex-row justify-center items-center gap-2">
                  <button
                    onClick={() => console.log("edit data tabel =>", i + 1)}
                    className="w-full sm:w-fit btn btn-sm btn-outline btn-primary"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => console.log("delete data =>", i + 1)}
                    className="w-full sm:w-fit btn btn-sm btn-outline btn-error"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {employeeList.length === 0 ? (
          <div className=" flex py-36 justify-center items-center bg-red-500">
            Data not found.
          </div>
        ) : null}
      </div>
    </div>
  );
}
