import { Link } from "react-router";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center relative min-h-dvh w-full">
      <div
        className="absolute inset-0 blur-xl z-10"
        style={{
          background:
            "linear-gradient(150deg, rgba(192, 132, 252, 0) 20.79%, rgba(121, 125, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <section className="max-w-full mx-auto z-20">
        <div className="max-w-screen-xl z-10 mx-auto px-4 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center">
            <h1 className="text-4xl tracking-tighter font-geist  bg-clip-text dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent bg-[linear-gradient(180deg,_#370e35_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  mx-auto md:text-6xl">
              Effortless Email Template Creation for Everyone
            </h1>

            <p className="max-w-2xl mx-auto text-foreground/45">
              Say goodbye to complicated tools. With EasyCompose, build
              stunning, customizable email templates in minutes—no coding
              required.
            </p>
          </div>
          <div className="flex mx-auto items-center gap-4 justify-center mt-14">
            <Button className="bg-sky-700 hover:bg-sky-600 text-white transition-colors duration-300 h-12 px-6">
              <Link to="/auth/register">Start Building Now</Link>
            </Button>
            <Button
              className=" transition-colors duration-300 h-12 px-6"
              variant={"secondary"}
            >
              Explore Features
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
