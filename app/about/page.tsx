import CardBox from "@/components/CardBox";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-tr from-violet-200 to-indigo-200">
      <h1 className="my-10 text-xl font-bold text-violet-700">About</h1>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <CardBox />
        <CardBox />
        <CardBox />
      </div>
    </div>
  );
};

export default About;
