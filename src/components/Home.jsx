import Me from "../assets/me.jpeg";

function Home() {
  return (
    <section className="overflow-scroll h-screen flex flex-col w-full h-full bg-slate-300">
      <div className="flex justify-center items-center mt-4">
        <img
          className="rounded-full mx-2 border-2 w-40 border-[#8BC34A]"
          src={Me}
          alt="A picture of me"
        />
        <div className="flex flex-col pl-4">
          <p>
            This is some stuff about me This is some stuff about me This is some
            stuff about me This is some stuff about me This is some stuff about
            me This is some stuff about me This is some stuff about me
          </p>
          <p>
            This is some stuff about me This is some stuff about me This is some
            stuff about me This is some stuff about me This is some stuff about
            me This is
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
