import { useEffect, useState } from "react";
import apiClient, { type Task } from "../api/apiClient";
import TaskWrapper from "../components/TaskWrapper";

const DashboardPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    setTasks(await apiClient.getAllTasks());
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="bg-gray-700 h-screen text-gray-200 font-medium">
        <div>
          <div className="flex justify-end pt-10 pr-10 text-white font-bold">
            <button className="bg-black p-2 border rounded-lg">+追加</button>
          </div>
        </div>
        <TaskWrapper tasks={tasks} />
      </div>
    </>
  );
};
export default DashboardPage;
