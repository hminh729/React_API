const Navbar = () => {
  const handleSearch = () => {
    console.log("searching...");
  };
  return (
    <div className="flex flex justify-center items-center ">
      <div className="border  w-[200px] h-[30px] my-10 rounded-md">
        <input
          type="text"
          className="placeholder:text-gray-400 w-full h-full px-2"
          placeholder="Type your Countrie..."
        />
      </div>
      <button
        className="ml-4 border h-[30px] w-[60px] bg-gray-400 rounded-md "
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
export default Navbar;
