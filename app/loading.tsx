import { ImSpinner3 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <ImSpinner3 className="animate-spin" color="purple" size={64} />
    </div>
  );
};

export default Loading;
