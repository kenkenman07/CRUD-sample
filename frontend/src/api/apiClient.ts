export type Task = {
  id: number;
  title: string;
  status: string;
};

const apiClient = {
  async getAllTasks() {
    const response = await fetch("http://localhost:3001/tasks");
    const tasks = response.json();
    return tasks;
  },

  async createTask(title: string) {
    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ title: title }),
    });
    const newTask = response.json();
    return newTask;
  },
};

export default apiClient;
