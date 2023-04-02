import CardBox from "@/components/CardBox";

const About = () => {
  const renderImages = () =>
    [1, 2, 3].map(id => (
      <CardBox
        key={id}
        title="title"
        description="description"
        imagePath={`/images/about/card${id}.jpg`}
      />
    ));

  return (
    <div className="flex flex-col items-center w-full h-full overflow-auto bg-gradient-to-tr from-violet-200 to-indigo-200">
      <h1 className="my-10 text-xl font-bold text-violet-700">About</h1>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {renderImages()}
      </div>
    </div>
  );
};

export default About;
