import { ImSpinner3 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-violet-200 via-indigo-200 to-purple-200">
      <ImSpinner3 className="text-purple-600 animate-spin" size={64} />
    </div>
  );
};

export default Loading;
