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
};

export default apiClient;
