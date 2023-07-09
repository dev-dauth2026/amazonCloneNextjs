const HomeSignInCard = () => {
  const service = {
    id: 1,
    image: "./homeProductCategory/remoteController.jpeg",
    description:
      "This is an easy remoter controller with lots of features for smart tv",
  };
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };
  return (
    <div className="card w-full   flex flex-col justify-between gap-2">
      <div className="mb-3 flex flex-col gap-2 bg-white p-3">
        <h3>Sign in for your best experience</h3>
        <button className="bg-yellow-400 p-2 w-full rounded">
          Sign in securely
        </button>
      </div>
      <div className="card w-full bg-white p-5 flex flex-col justify-between gap-2 ">
        <img src={service.image} alt="sign in" />
        <p className="text-[12px]">
          {truncateDescription(service.description, 20)}
        </p>
        <span className="text-[10px]"> ⭐️⭐️⭐️⭐️⭐️ </span>
        <button className="bg-yellow-500 rounded-full  w-28 text-[12px]">
          Shop now
        </button>
      </div>
    </div>
  );
};
export default HomeSignInCard;
