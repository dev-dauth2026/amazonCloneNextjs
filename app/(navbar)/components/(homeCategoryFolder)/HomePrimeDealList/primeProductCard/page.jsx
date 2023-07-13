const PrimeProductCard = ({ id, image, name, discountedPrice }) => {
  return (
    <div className="flex flex-col max-w-[120px] max-h-[120px] " key={id}>
      <img
        src={image}
        alt={name}
        className="object-contain  w-full max-h-[100px] border-2 "
      />
      <p className="text-[10px]">
        {name} {discountedPrice} %
      </p>
    </div>
  );
};
export default PrimeProductCard;
