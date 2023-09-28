import Me from "../assets/me.jpeg";

function About() {
  return (
    <section className="mt-14">
      <div className="flex justify-center items-center">
        <img
          className="rounded-full mx-2 border-2 w-40 border-amber-700"
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

export default About;
