import Link from "next/link";
const HomeCategoryCard = ({ bodyContent }) => {
  return (
    <div className="card  bg-white p-4 flex flex-col justify-between gap-2 h-[400px]">
      {bodyContent}
    </div>
  );
};
export default HomeCategoryCard;
