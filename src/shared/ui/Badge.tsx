interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span
      className='w-fit font-bold px-3 py-[5px] text-xs border rounded-full text-[#F72717] text-center border-[#F72717]'
    >
      {children}
    </span>
  );
};
