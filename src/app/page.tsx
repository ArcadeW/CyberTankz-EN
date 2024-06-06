import Button from "@/components/modules/home/button";
import GlitchSection from "@/components/modules/home/glitch-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Image
        src="/wallpaper-new.png"
        alt="hero_wallpaper"
        width={1920}
        height={1080}
        className="absolute h-screen opacity-10 -z-10"
      />
      <GlitchSection
        text="CyberTankz"
        description=" It's time to embark on a journey across the battlefield where the
        past meets the present. The game will take you from 2020 to 2024 and
        offer you an unforgettable experience. With over 31 ranks to achieve,
        each map offers familiar yet new battles and challenges. Plenty of
        special quests and unique rewards await you to make you stand out on the
        battlefield. The future of CyberTankz will be developed based on your
        feedback, but rest assured that both new and old fan-favourite features
        are in store. Join us as we embark on a rewritten past with CyberTankz!"
      />

        <div className="flex flex-col items-center justify-center gap-4 p-5 reserve-box">
        {/* Free Nickname Box */}
        <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded shadow-lg">
          <img
            src="https://i.imgur.com/bGiCzi1.png"
            alt="Free Nickname Logo"
            className="mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 reserve-glitch" data-text="Free Nickname">Free Nickname</h2>
          <p className="text-center mb-4">
            Reserve your exclusive nickname today! The in-game nickname must be a minimum of three characters long. Basic nicknames will be free upon the game's release!
          </p>
          <p className="text-center text-lg font-semibold mb-4" style={{ marginTop: '50px' }}>
            <strong>Price:</strong> For free
          </p>
          <div className="flex flex-col items-center justify-center gap-2 pt-5">
          <a href="https://www.cybertankzforum.com/register/" target="_blank" rel="noopener noreferrer">
            <button className="cybr-btn w-fit h-13">
              Reserve your nick here
            <span aria-hidden="true">_</span>
            <span aria-hidden="true" className="cybr-btn__glitch">Reserve your nick here</span>
          </button>
          </a>
          </div>
        </div>

        {/* Premium Nickname Box */}
        <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded shadow-lg">
          <img
            src="https://i.imgur.com/DO8C8NG.png"
            alt="Premium Nickname Logo"
            className="mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Premium Nickname</h2>
          <p className="text-center mb-4">
            Do you consider yourself a tanker who enjoys feeling exclusive? Well, we have got just the thing for you: two-letter or number nicknames. With these unique nicknames, you will stand out in style. Are you ready to embrace your individuality with a stylish and iconic username?
          </p>
          <p className="text-center text-lg font-semibold mb-4">
            <strong>Price:</strong> $15
          </p>
          <div className="flex flex-col items-center justify-center gap-2 pt-5">
          <a href="https://buy.stripe.com/5kA9DF4NE6bYe3edQV" target="_blank" rel="noopener noreferrer">
            <button className="cybr-btn w-fit h-13">
              Reserve your nick here
            <span aria-hidden="true">_</span>
            <span aria-hidden="true" className="cybr-btn__glitch">Reserve your nick here</span>
          </button>
          </a>
          </div>
        </div>

        {/* Elite Nickname Box */}
        <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded shadow-lg">
          <img
            src="https://i.imgur.com/eLK5cns.png"
            alt="Elite Nickname Logo"
            className="mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Elite Nickname</h2>
          <p className="text-center mb-4">
            A brand-new feature which was considered to be impossible in all Tanki versions, a nickname that contains one character. Now you can reserve premium one letter/number nicknames! Get your ticket today and start your unique journey!
          </p>
          <p className="text-center text-lg font-semibold mb-4">
            <strong>Price:</strong> $30
          </p>
         <div className="flex flex-col items-center justify-center gap-2 pt-5">
          <a href="https://buy.stripe.com/fZecPRcg61VI3oAcMS" target="_blank" rel="noopener noreferrer">
            <button className="cybr-btn w-fit h-13">
              Reserve your nick here
            <span aria-hidden="true">_</span>
            <span aria-hidden="true" className="cybr-btn__glitch">Reserve your nick here</span>
          </button>
          </a>
          </div>
        </div>
      </div>
    </main>
  );
}
