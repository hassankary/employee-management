/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const EmployeeSchema = z.object({
  name: z.string().min(6),
  role: z.string().min(6),
  email: z.string().min(6),
  address: z.string().min(6),
});

export const saveEmployee = async (prevSate: any, formData: FormData) => {
  const validatedFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    console.log("succes submitted for =>", validatedFields.data.name);
    await prisma.employee.create({
      data: {
        name: validatedFields.data.name,
        role: validatedFields.data.role,
        email: validatedFields.data.email,
        address: validatedFields.data.address,
      },
    });
  } catch (error) {
    return {
      message: `Failed to create new employee: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }

  revalidatePath("/");
  redirect("/");
};

export const getEmployeelist = async () => {
  try {
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        role: true,
        email: true,
        address: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return employees;
  } catch (error) {
    return {
      message: `Failed to fetch employee: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const getEmployeeById = async (id: string) => {
  try {
    const employee = await prisma.employee.findUnique({
      where: { id },
    });
    return employee;
  } catch (error) {
    return {
      message: `Failed to find employee with ID: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const updateEmployee = async (
  id: string,
  prevSate: any,
  formData: FormData
) => {
  const validatedFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    console.log("succes updated for =>", validatedFields.data.name);
    await prisma.employee.update({
      where: { id },
      data: {
        name: validatedFields.data.name,
        role: validatedFields.data.role,
        email: validatedFields.data.email,
        address: validatedFields.data.address,
      },
    });
  } catch (error) {
    return {
      message: `Failed to update employee data: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }

  revalidatePath("/");
  redirect("/");
};

export const deleteEmployee = async (id: string) => {
  try {
    await prisma.employee.delete({
      where: { id },
    });
  } catch (error) {
    return {
      message: `Failed to delete employee: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }

  revalidatePath("/employee");
};
