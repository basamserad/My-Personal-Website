const ProlangCard = ({ img, title }) => (
  <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[200px]">
    <div className="flex align-center justify-center leading-[32.4px] my-10">
      <img
        src={img}
        alt="double_quotes"
        className="w-[50px] h-[50px] object-contain"
      />
    </div>

    <div className="flex flexCenter text-center">
      <h4 className="font-poppins font-semibold text-[18px] leading-[32px] text-white">
        {title}
      </h4>
    </div>
  </div>
);

export default ProlangCard;
