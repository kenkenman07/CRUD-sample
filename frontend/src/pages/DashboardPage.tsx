import { useEffect, useState } from "react";
import apiClient, { type Task } from "../api/apiClient";
import TaskWrapper from "../components/TaskWrapper";
import Modal from "../components/Modal";

const DashboardPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const getTasks = async () => {
    setTasks(await apiClient.getAllTasks());
  };

  const createTask = async () => {};

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="bg-gray-700 h-screen text-gray-200 font-medium">
        <div>
          <div className="flex justify-end pt-10 pr-10 text-white font-bold">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-black p-2 border rounded-lg"
            >
              +追加
            </button>
          </div>

          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="タスクを追加"
          >
            <div className="flex">
              <input
                type="text"
                placeholder="タイトル名を入力"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded-lg px-4"
              />
              <button
                onClick={createTask}
                className="ml-18 border rounded-lg p-2 hover:bg-black hover:text-white"
              >
                追加
              </button>
            </div>
          </Modal>
        </div>
        <TaskWrapper tasks={tasks} />
      </div>
    </>
  );
};
export default DashboardPage;
