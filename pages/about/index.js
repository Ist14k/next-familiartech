import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="">
      <main className="flex gap-3 justify-between items-center flex-col-reverse md:flex-row">
        <figure className=" basis-1/2">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/005/637/993/original/man-making-work-concept-in-front-of-computer-with-tutorial-free-vector.jpg"
            width={900}
            height={600}
            alt="about-page-img"
          />
        </figure>
        <div className="basis-1/2">
          <h1 className="text-4xl mb-3">Welcome to my blog website.</h1>
          <p>
            This is my first NextJS based blogging website. I created this site
            from ground up.
          </p>
          <h5 className="text-xl mt-2 font-bold">
            This site is still in development.
          </h5>
          <p>New features will be added soon.</p>
        </div>
      </main>
    </section>
  );
};

export default AboutPage;
