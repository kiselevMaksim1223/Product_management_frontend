const Spinner = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Spinner;
