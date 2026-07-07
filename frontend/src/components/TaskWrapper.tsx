import type { Task } from "../api/apiClient";
import StatusLabel from "./StatusLabel";

type TaskWrapperProps = {
  tasks: Task[];
};

const TaskWrapper = ({ tasks }: TaskWrapperProps) => {
  const dividedTask = [
    tasks.slice(0, 4),
    tasks.slice(4, 8),
    tasks.slice(8, 12),
  ];
  return (
    <div className="flex my-5 mx-10 border rounded-lg h-170 shadow bg-black">
      {dividedTask.map((dividedTask, index) => {
        return (
          <div key={index} className="w-1/3 h-full">
            <div className="flex flex-col h-full">
              {dividedTask.map((task) => {
                return (
                  <div key={task.id} className="h-1/4 p-2">
                    <div className="border rounded-lg bg-gray-500 h-full">
                      <div className="px-3">
                        <div className="py-5 text-xl">{task.title}</div>
                        <div className="flex">
                          <StatusLabel status={task.status} />
                          <div className="pl-55">更新</div>
                        </div>
                        <div>削除</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TaskWrapper;
