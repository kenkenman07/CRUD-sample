const DashboardPage = () => {
  return (
    <>
      <div className="bg-gray-700 h-screen text-gray-200 font-medium">
        <div>
          <div className="flex justify-end pt-10 pr-10 text-white font-bold">
            +追加
          </div>
        </div>
        <div className="flex my-5 mx-10 border rounded-lg h-180 shadow bg-black">
          <div className="w-1/3 h-full">
            <div className="flex flex-col h-full p-2 gap-2">
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
            </div>
          </div>
          <div className="w-1/3 h-full">
            <div className="flex flex-col h-full p-2 gap-2">
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
            </div>
          </div>
          <div className="w-1/3 h-full">
            <div className="flex flex-col h-full p-2 gap-2">
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
              <div className="h-1/4 border rounded-lg bg-gray-500">task1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
