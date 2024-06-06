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

<div id="mainContainer">
  <div className="margin-body">
    <div>
      <div className="starsec"></div>
      <div className="starthird"></div>
      <div className="starfourth"></div>
      <div className="starfifth"></div>
    </div>

    <div className="row">
      <div className="col-sm-12 col-md-12">
        <div className="title-h1 text-center"><span><span className="light">pricing </span> table</span></div>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-3 col-md-3 pricing-column-wrapper">
        <div className="pricing-column">
          <div className="pricing-price">
            <div className="pricing-cost">Free</div>
            <div className="time">Price</div>
          </div>
          <div className="pricing-row-title">Free Nickname</div>
          <figure className="pricing-row">Free nickname</figure>
          <figure className="pricing-row"><span>Guaranteed in-game name.</span></figure>
          <figure className="pricing-row"><span>3-20 letters/numbers.</span></figure>
          <figure className="pricing-row"><span>Access to game after the game's release.</span></figure>
          <div className="pricing-footer">
            <div className="gem-button-container gem-button-position-center"><a href="#" className="gem-button gem-green">order now</a></div>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-md-3 pricing-column-wrapper">
        <div className="pricing-column">
          <div className="pricing-price">
            <div className="pricing-cost">$15</div>
            <div className="time">Price</div>
          </div>
          <div className="pricing-row-title">Premium Nickname</div>
          <figure className="pricing-row">Unique two-letter/number name.</figure>
          <figure className="pricing-row"><span>Guaranteed in-game name with 2 letters.</span></figure>
          <figure className="pricing-row"><span>Early access to the game (July 2024).</span></figure>
          <figure className="pricing-row">Special Paint "Premium Nick."</figure>
          <div className="pricing-footer">
            <div className="gem-button-container gem-button-position-center"><a href="#" className="gem-button gem-orange">order now</a></div>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-md-3 pricing-column-wrapper">
        <div className="pricing-column">
          <div className="pricing-price">
            <div className="pricing-cost">$30</div>
            <div className="time">Price</div>
          </div>
          <div className="pricing-row-title">Elite Nickname</div>
          <figure className="pricing-row">Unique one-letter/number name.</figure>
          <figure className="pricing-row"><span>Guaranteed in-game name with 1 letter.</span></figure>
          <figure className="pricing-row"><span>Early access to the game (July 2024).</span></figure>
          <figure className="pricing-row">Special Paint "Elite Nickname."</figure>
          <div className="pricing-footer">
            <div className="gem-button-container gem-button-position-center"><a href="#" className="gem-button gem-yellow">order now</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </main>
  );
}
