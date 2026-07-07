export type Task = {
  id: number;
  title: string;
  status: string;
};

const apiClient = {
  async getAllTasks() {
    const url = "http://localhost:3001/tasks";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`サーバーからの応答が異常です: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("エラーが発生しました: ", error);
    }
  },

  async createTask(title: string) {
    const url = "http://localhost:3001/tasks";
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title }),
    };

    try {
      const response = await fetch(url, params);

      if (!response.ok) {
        throw new Error(`サーバーからの応答が異常です: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("エラーが発生しました: ", error);
    }
  },
};

export default apiClient;
