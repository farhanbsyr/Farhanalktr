function SideIcon({ icons }) {
  return (
    <img
      className=" transform duration-500 hover:scale-125"
      width={40}
      height={60}
      src={icons}
      alt={icons}
    />
  );
}

export default SideIcon;
