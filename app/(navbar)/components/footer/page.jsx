const Footer = () => {
  return (
    <footer className="flex flex-col ">
      <div className="mainFooter bg-gray-600 flex flex-row justify-around items-center text-white p-6">
        <div className="div1 flex justify-center items-center border-2 border-red-500">
          <p>Div 1</p>
        </div>
        <div className="div2 flex justify-center items-center">
          <p>Div 2</p>
        </div>
        <div className="div3 flex justify-center items-center">
          <p>Div 3</p>
        </div>
      </div>
      <div className="flex copyRight bg-gray-700 text-white p-6 justify-center items-center">
        <p>copyright reserved 2023 | Shoe Store Australia</p>
      </div>
    </footer>
  );
};
export default Footer;
