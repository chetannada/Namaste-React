const Shimmer = () => {
  return (
    <div className="flex  flex-wrap gap-6">
      {Array.from({ length: 15 }).map((num, index) => (
        <div key={index}>
          <div className="w-72 h-64 shadow p-2 bg-gray-200 rounded "></div>
          <h1 className="bg-gray-200 mt-3 h-3 w-40"></h1>
          <h1 className="bg-gray-200 mt-2 h-3 w-24"></h1>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
