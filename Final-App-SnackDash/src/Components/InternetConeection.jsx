const InternetConnection = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#F26945] px-6 py-6 rounded-lg col-span-full flex items-center space-x-3">
          <i className="fa-solid fa-globe text-2xl"></i>
          <h1 className="text-white  font-[poppins] text-base font-normal">
            You are offline ! Please check your connection.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InternetConnection;
