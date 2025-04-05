const Contries = ({ countrie }) => {
  return (
    <>
      <div className="border w-[250px] h-[270px] mb-4">
        <div className="border w-[250px] h-[135px]">
          <img
            className="w-full, h-full"
            src={countrie.flags.png}
            alt="flags"
          />
        </div>
        <div className=" h-[100px] mt-2 mx-4  ">
          <p className="mb-2 font-extrabold">{countrie.name.common}</p>
          <div className="flex">
            <p className="font-semibold">Population:</p>
            <p className="ml-2">{countrie.population}</p>
          </div>
          <div className="flex">
            <p className="font-semibold">Region:</p>
            <p className="ml-2">{countrie.region}</p>
          </div>
          <div className="flex">
            <p className="font-semibold">Capital:</p>
            <p className="ml-2">{countrie.capital}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contries;
