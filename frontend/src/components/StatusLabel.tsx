type StatusLabelProps = {
  status: string;
};

const StatusLabel = ({ status }: StatusLabelProps) => {
  return (
    <div
      className={`rounded-lg p-1 text-black ${status === "not_started" ? "bg-blue-400" : status === "in_progress" ? "bg-green-400" : "bg-amber-400"}`}
    >
      {status}
    </div>
  );
};
export default StatusLabel;
