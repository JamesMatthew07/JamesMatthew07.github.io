import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

function AboutMe() {
  return (
    <>
      <div className="bg-black h-auto pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src="https://i.imgur.com/BX4yFIk.png"
                alt="Picture"
                width={500}
                height={500}
                className="img-fluid mb-2"
              />
              <div className="text-xl text-white text-center mt-4 max-w-[72vh]">
              🟢 open for work
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4 p-3">
                <HeroHighlight>
                  <h1 className="text-3xl font-bold">
                    <Highlight className="text-white">
                      James Matthew Llanos
                    </Highlight>
                    👋
                  </h1>
                  <p className=" text-xl text-justify text-gray-400 dark:text-gray-300 mt-10">
                  ➡️ a driven tech enthusiast with a passion for innovation and
                    problem-solving, excelling in web development. committed to
                    delivering impactful solutions, combining creativity and
                    precision to tackle real-world challenges and drive progress
                    in the tech industry.
                  </p>
                </HeroHighlight>
                <div className="text-white text-xl mt-3">
                philosophies I live by:
                <FlipWords className="text-white" words={["kaizen", "stoicism", "amor fati","memento mori"]} duration={2000}></FlipWords>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
