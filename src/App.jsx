import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio("/adexia.mp3"));

  const gigs = [
    // { date: "01/01/01", location: "BAGGEN", time: "23-05" },
    // { date: "01/01/01", location: "Den Anden Side", time: "23-05" },
    // { date: "01/01/01", location: "Berghain", time: "23-05" },
    // { date: "01/01/01", location: "Cosy", time: "23-05" },
  ];

  const togglePlaying = () => {
    const currentlyPlaying = playing;
    setPlaying(!currentlyPlaying);

    audioRef.current[currentlyPlaying ? "pause" : "play"]();
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen px-10 py-10">
      <div className="relative z-10">
        <div className="max-w-[500px] max-h-min w-full h-min relative">
          <img
            src="/adexia.jpeg"
            className="object-cover h-full w-[500px] grayscale opacity-90"
          />
        </div>

        <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center">
          <div className="flex flex-col gap-y-2 text-white px-10">
            <h1 className="text-center akira text-4xl sm:text-6xl text-extremepink hard-shadow">
              <span className="glow">Adexia</span>
            </h1>
            <div className="font-medium text-sm sm:text-base">
              {gigs.map((gig, i) => (
                <div key={`gig-${i}`} className="flex justify-between gap-x-4">
                  <div>{gig.date}</div>
                  <div className="whitespace-nowrap">
                    {gig.location} @ {gig.time}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center text-xs sm:text-lg">
              booking:{" "}
              <a
                href="mailto:frederik@queermusic.agency"
                className="hover:underline"
              >
                frederik@queermusic.agency
              </a>
            </div>
          </div>

          <audio src="/adexia.mp3"></audio>

          <a
            href="https://soundcloud.com/adexia"
            target="_blank"
            rel="noopener"
            className="absolute bottom-4 h-8 sm:h-12"
          >
            <div className="relative h-8 sm:h-12 w-32 flex justify-center">
              <img
                src="/soundcloud.png"
                className="absolute h-8 sm:h-12 brightness-0 invert soundcloud"
              />
              <img
                src="/soundcloud.png"
                className="absolute h-8 sm:h-12 soundcloud-color pointer-events-none"
              />
              {/* <img
                src="/instagram.png"
                className="absolute h-8 sm:h-12 soundcloud-color pointer-events-none"
              /> */}
            </div>
          </a>
        </div>

        <div
          className="absolute top-4 right-4 h-10 w-10 invert cursor-pointer"
          onClick={togglePlaying}
        >
          <img src={!playing ? "/play.svg" : "/pause.svg"} />
        </div>
      </div>

      <div className="absolute bottom-4 w-screen text-center text-white font-medium">
        © made by{" "}
        <a
          href="https://steffen.codes/"
          target="_blank"
          rel="noopener"
          className="hover:underline"
        >
          steffen.codes
        </a>
      </div>
    </div>
  );
}

export default App;
