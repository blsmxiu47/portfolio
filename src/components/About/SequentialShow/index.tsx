import '../../../index.css';

interface SequentialShowProps {
  children: React.ReactNode[];
}

const SequentialShow: React.FC<SequentialShowProps> = ({ children }) => {
  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-6 px-[12.5%] py-2 text-center">
        {children.slice(0, 3).map((child, index) => (
          <div key={index} className={`flex justify-center col-span-2`}>
            {child}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-1 grid-cols-8 py-2 text-center">
        {children.slice(3).map((child, index) => (
          <div key={index} className={`flex justify-center col-span-2`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SequentialShow;