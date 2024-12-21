'use server'
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

const taskEndpoint = `${process.env.API_BASE_URL}/tasks`

export interface Task {
  id: number,
  title: string,
  color: string,
  completed: boolean,
  createdAt: string,
  updatedAt: string
}

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(taskEndpoint);

    if (!response.ok) {
      throw new Error(`Error fetching tasks: ${response.status} ${response.statusText}`);
    }

    return await response.json() as Task[];
  } catch (error) {
    console.error(error)
    return []
  }
}

export interface TaskCount{
  total: number;
  completed: number;
}

export const getTaskCount = async (): Promise<TaskCount> => {
  try {
    const response = await fetch(`${taskEndpoint}/count`);

    if (!response.ok) {
      throw new Error(`Error fetching tasks: ${response.status} ${response.statusText}`);
    }

    return await response.json() as TaskCount;
  } catch (error) {
    console.error(error)
    return {
      total: 0,
      completed: 0,
    }
  }
}

export const getTask = async (id: number): Promise<Task | null> => {
  try {
    const response = await fetch(`${taskEndpoint}/${id}`);

    if (!response.ok) {
      throw new Error(`Error fetching tasks: ${response.status} ${response.statusText}`);
    }

    return await response.json() as Task;
  } catch (error) {
    console.error(error)
    return null
  }
}

export const changeTaskStatus = async (id: number, completed: boolean): Promise<Task | null> => {
  try {
    const formData = new FormData();
    formData.append("completed", completed.toString());
    const response = await fetch(`${taskEndpoint}/${id}`, {
      method: 'PUT',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error fetching tasks: ${response.status} ${response.statusText}`);
    }
    revalidatePath("/")
    return await response.json() as Task;
  } catch (error) {
    console.error(error)
    return null
  }
}

export const deleteTask = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${taskEndpoint}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error fetching tasks: ${response.status} ${response.statusText}`);
    }

    revalidatePath("/")
  } catch (error) {
    console.error(error)
  }
}

export interface UpsertTask extends Partial<Task> {
  error?: string;
}

export const upsertTask = async (_prevState: unknown, formData: FormData): Promise<UpsertTask> => {
  const id: string = formData.get("id") as string;
  const title: string = formData.get("title") as string;
  const color: string = formData.get("color") as string;
  if(id === "new") {
    if(!title) return {
      error: "Title is required",
    }
    if(!color) return {
      error: "Color is required",
    }
  }

  let url = taskEndpoint;
  let method = "POST";
  if(id !== "new") {
    url = `${url}/${id}`;
    method = "PUT";
  }
let response: Response | null = null;
  try {
     response = await fetch(url, {
      method,
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Error fetching tasks: ${response.status} ${response.statusText}`);
    }

  } catch (error) {
    console.error(error)
    return {
      error: (error as Error).message
    }
  }
  revalidatePath("/")
  redirect("/")
  return response?.json() as UpsertTask;
}