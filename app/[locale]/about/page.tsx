import CardBox from "@/components/CardBox";

export const metadata = {
  title: "About - Elahiya",
  description: "About Elahiya School",
};

const About = () => {
  const renderImages = () =>
    [1, 2, 3].map(id => (
      <CardBox
        key={id}
        title="title"
        description="description"
        imagePath={`/images/card${id}.png`}
      />
    ));

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-100px)] p-2 overflow-auto bg-gradient-to-br from-violet-300 via-indigo-300 to-purple-300">
      <div className="p-2 my-4 rounded bg-violet-100">
        <h1 className="text-xl font-semibold text-indigo-800">About</h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {renderImages()}
      </div>
    </div>
  );
};

export default About;
