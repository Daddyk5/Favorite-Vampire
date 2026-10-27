"use client";

import { useRef, useState, type MouseEvent } from "react";

type FloatingPetal = { id: number; x: number; y: number };

function MoonlitGarden({ rosePlanted }: { rosePlanted: boolean }) {
  return (
    <svg
      className="garden-art"
      viewBox="0 0 1200 660"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="night" x2="0" y2="1">
          <stop stopColor="#111229" />
          <stop offset=".58" stopColor="#232040" />
          <stop offset="1" stopColor="#49304b" />
        </linearGradient>
        <radialGradient id="moonlight">
          <stop stopColor="#fff8d8" />
          <stop offset=".7" stopColor="#e9c9a1" />
          <stop offset="1" stopColor="#c98ea0" />
        </radialGradient>
        <linearGradient id="hill" x2="0" y2="1">
          <stop stopColor="#29213c" />
          <stop offset="1" stopColor="#141725" />
        </linearGradient>
        <filter id="soft-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <path fill="url(#night)" d="M0 0h1200v660H0z" />
      <circle className="moon-halo" cx="850" cy="205" r="152" fill="#eacbd2" opacity=".14" filter="url(#soft-glow)" />
      <circle className="moon" cx="850" cy="205" r="117" fill="url(#moonlight)" />
      <path fill="#d9b4a1" opacity=".3" d="M775 146h35v17h-35zm66-37h25v18h-25zm49 74h27v18h-27zm-73 75h30v15h-30z" />

      <g fill="#f8e9da">
        <path d="M114 81h5v5h-5zm101 120h5v5h-5zm160-118h4v4h-4zm104 84h6v6h-6zm163-92h4v4h-4zm355 14h5v5h-5zm120 102h6v6h-6zm-78 133h4v4h-4zm-779-8h5v5h-5zm278-98h4v4h-4zm505-94h5v5h-5z" />
      </g>
      <g fill="#d9a9d8">
        <path d="M165 142h4v4h-4zm370-78h4v4h-4zm307 10h4v4h-4zm283 211h4v4h-4zm-848 13h4v4h-4z" />
      </g>
      <path d="m268 145 5-13 5 13 13 5-13 5-5 13-5-13-13-5zm670-61 4-10 4 10 10 4-10 4-4 10-4-10-10-4z" fill="#ffeac1" />

      <g fill="#171725" opacity=".78">
        <path d="M0 388h74v-73h34v42h49v-89h38v54h42v-38h26v104h69v-65h24v-43h29v103h68v-71h27v-36h22v106h71v-80h36v-45h24v101h82v-60h27v-35h30v89h58v-65h22v-54h29v119h89v-83h36v-44h26v99h56v-68h30v-53h33v134h78v272H0z" />
      </g>
      <g fill="#2d263e" opacity=".78">
        <path d="M58 389h28v-22h-28zm147 0h34v-29h-34zm128 0h32v-23h-32zm203 0h39v-28h-39zm177 0h34v-25h-34zm193 0h40v-32h-40zm129 0h38v-26h-38z" />
      </g>
      <path fill="url(#hill)" d="M0 431c132-36 213 5 340-9 135-15 208-22 325-1 116 21 191-21 302-17 100 4 147 40 233 19v237H0z" />
      <path fill="#756083" opacity=".4" d="M0 488c157-25 279 1 415-17s268-19 402 4 258-8 383-1v22c-154-7-269 27-405 2s-257-12-384 2S139 485 0 510z" />

      <g className="fireflies" fill="#ffd89a">
        <circle cx="183" cy="374" r="3" /><circle cx="257" cy="414" r="2" /><circle cx="1001" cy="396" r="3" />
        <circle cx="1052" cy="350" r="2" /><circle cx="742" cy="415" r="2" /><circle cx="391" cy="361" r="2" />
      </g>

      <g className="flight-petals">
        <path d="M355 287c-8-12-1-21 8-17 10 5 5 15-8 17zm518 24c-9-12-1-21 8-16 9 5 4 14-8 16z" fill="#f1a0a9" />
        <path d="M433 214c-7-13 2-20 10-14 8 7 0 15-10 14zm419 129c-7-13 1-19 9-14s0 14-9 14z" fill="#b9a0d4" />
        <path d="m392 392 6-7 6 8-8 5zm449-178 6-8 7 8-8 5z" fill="#ffdcaa" />
        <path d="M760 275c-9-12-1-20 8-15 9 6 3 14-8 15zm-310 96c-8-11 0-19 8-14 8 5 2 13-8 14z" fill="#e98280" />
      </g>

      <g className="border-vines" shapeRendering="crispEdges">
        <path d="M27 114v87l8 11-8 12v83l8 12-8 12v93m1146-300v87l-8 11 8 12v83l-8 12 8 12v93" fill="none" stroke="#64704e" strokeWidth="4" />
        <path d="m27 158-12-8 5 16 11 2zm0 73 12-8-4 17-11 3zm0 84-12-8 4 17 10 2zm0 71 12-8-4 16-10 3zm1146-228 12-8-5 16-11 2zm0 73-12-8 4 17 11 3zm0 84 12-8-4 17-10 2zm0 71-12-8 4 16 10 3z" fill="#849162" />
        <path d="M13 130h6v6h-6zm6 6h6v6h-6zm-5 6h6v6h-6zm1162-12h6v6h-6zm-6 6h6v6h-6zm5 6h6v6h-6zM17 337h6v6h-6zm5 6h6v6h-6zm-7 6h6v6h-6zm1158-12h6v6h-6zm-5 6h6v6h-6zm7 6h6v6h-6z" fill="#c6a2d4" />
        <path d="M15 140h4v4h-4zm1165 0h4v4h-4zM19 348h4v4h-4zm1157 0h4v4h-4z" fill="#e6c19a" />
      </g>

      <g className="approach-scene" shapeRendering="crispEdges">
        <ellipse cx="474" cy="525" rx="92" ry="15" fill="#11121e" opacity=".45" />
        <g transform="translate(420 342)">
          <path fill="#171723" d="M31 62h49l16 86-15 67H58l-5-58-9 58H20l4-77z" />
          <path fill="#10111d" d="M18 212h24v11H17zm39 0h26v11H55z" />
          <path fill="#292638" d="M25 67h54l17 74-23 42H30l-14-40z" />
          <path fill="#f2e7dc" d="M43 69h20l-5 28 10 20-13 35-14-35 9-20z" />
          <path fill="#9a354d" d="m53 96 10 20-9 25-8-25z" />
          <path fill="#dfb596" d="M37 20h40v43H37z" />
          <path fill="#161722" d="M31 25h10V9h37v14h9v17H31zm6 20h7v7h-7zm32 0h7v7h-7z" />
          <path fill="#f3d9b4" d="M38 40h8v4h-8z" />
          <path fill="#bc5263" d="M39 45h6v4h-6z" />
          <path fill="#211e2c" d="M40 11h29v8H44l-9 13h-5V18z" />
          <path fill="#d4d7e4" d="M51 12h10v7H51z" />
          <path fill="#a92e4d" d="M45 32h7v5h-7zm21 0h7v5h-7z" />
          <path fill="#dca3aa" d="M44 56h29v8H44z" />
          <path fill="#292638" d="m28 74-17 47 10 8 25-42zm49 4 20 38-9 9-25-35z" />
        </g>
        <g transform="translate(550 408)">
          <path fill="#281e39" d="M25 42h46l33 82-48 21-48-20z" />
          <path fill="#49345d" d="m30 57 16 8-27 53-10-7zm37 5-10 7 35 48 10-8z" />
          <path fill="#ddb9a8" d="M33 7h34v38H33z" />
          <path fill="#151521" d="M27 12h10V1h37v18H27zm3 18h6v5h-6z" />
          <path fill="#f2d4d4" d="M54 10h8v5h-8z" />
          <path fill="#c47b98" d="M48 30h12v4H48z" />
          <path fill="#171521" d="M33 38h35v9H33z" />
        </g>
      </g>

      <g className="flight-couple" shapeRendering="crispEdges">
        <ellipse cx="602" cy="539" rx="93" ry="12" fill="#11121e" opacity=".38" />
        <g transform="translate(0 0)">
          <path fill="#171723" d="M551 337h42l18 94-7 81h-26l-6-67-11 67h-27l8-85z" />
          <path fill="#10111d" d="M535 505h29v11h-31zm42 0h30v11h-32z" />
          <path fill="#292638" d="M543 344h52l22 86-25 51h-48l-20-47z" />
          <path fill="#f6eee7" d="M557 346h23l-5 29 12 23-14 46-17-47 10-22z" />
          <path fill="#9a354d" d="m569 377 12 22-10 31-10-31z" />
          <path fill="#e8c1aa" d="M548 294h43v48h-43z" />
          <path fill="#151521" d="M541 304h9v-20h15v-9h30v17h12v26h-13v-11h-8v-9h-18v10h-14v19h-13z" />
          <path fill="#262334" d="M550 279h28v9h-20l-15 19h-9v-14z" />
          <path fill="#dce0eb" d="M563 283h12v7h-12z" />
          <path fill="#a92e4d" d="M557 311h7v5h-7zm24 0h7v5h-7z" />
          <path fill="#f5dedb" d="M557 312h8v3h-8zm24 0h8v3h-8z" />
          <path fill="#dfb0b9" d="M556 332h31v8h-31z" />
          <path fill="#292638" d="m546 354-25 58 13 8 33-49zm45 8 30 48-12 9-36-43z" />
          <path fill="#ddb9a8" d="M518 406h18v14h-18zm83 2h18v14h-18z" />
        </g>
        <g className="carried-girl">
          <path fill="#171421" d="M608 367h57l25 21-16 17h-64l-16-16z" />
          <path fill="#21192f" d="M605 382h72l17 16-21 10h-63l-15-11z" />
          <path fill="#533964" d="M619 386h48l19 11-18 7h-47z" />
          <path fill="#dfb7a8" d="M649 350h33v31h-33z" />
          <path fill="#171421" d="M644 356h8v-15h25v8h11v18h-10v-8h-23v20h-11z" />
          <path fill="#20202e" d="M651 355h12v6h-12zm19 0h11v6h-11z" />
          <path fill="#b55275" d="M655 357h7v4h-7zm20 0h7v4h-7z" />
          <path fill="#f3dbda" d="M658 363h10v3h-10z" />
          <path fill="#deb9ab" d="M682 375h14v9h-14z" />
          <path fill="#a784bd" d="M666 346h5v5h-5zm5-4h5v5h-5zm5 4h5v5h-5z" />
          <path fill="#a28ac2" opacity=".8" d="m647 383-36-25-17 5 25 29zm37 4 27-24 13 5-18 29z" />
          <path fill="#d8c4e7" d="m606 360 10 7-7 3zm99 4 10-7-3 12z" />
        </g>
        <path fill="#dca5c3" d="M590 399h13v9h-13zm96-3h12v9h-12z" />
      </g>

      <g className="garden-flowers" shapeRendering="crispEdges">
        <g transform="translate(74 480)">
          <path stroke="#60774f" strokeWidth="5" d="M27 113V15m20 98V44m-27 34L8 62m44 19 14-23" />
          <path fill="#78905c" d="m26 68-15-8 7 15 13 2zm22 6 15-10-5 17-13 4z" />
          <path fill="#f38a53" d="m26 22-7-14-7 13-12 2 9 9-3 14 14-7 13 7-3-15 9-8z" />
          <path fill="#bd5360" d="M14 19h5v5h-5zm12 8h5v5h-5zm-14 9h5v5h-5z" />
          <path fill="#ffcc78" d="M22 22h7v7h-7z" />
          <path fill="#f38a53" d="m47 47-6-12-7 10-11 2 8 9-3 12 13-6 10 6-2-13 8-7z" />
          <path fill="#bd5360" d="M35 44h5v5h-5zm10 9h5v5h-5z" />
        </g>
        <g transform="translate(1030 462)">
          <path stroke="#60774f" strokeWidth="5" d="M35 135V10m18 125V48m-18 18L13 52m39 24 16-20" />
          <path fill="#78905c" d="m31 72-16-9 8 16h13zm20 5 16-10-6 17-13 4z" />
          <path fill="#f38a53" d="m35 18-7-13-7 12-12 2 9 10-3 13 13-6 13 7-3-14 9-8z" />
          <path fill="#bd5360" d="M23 15h5v5h-5zm12 9h5v5h-5zm-14 9h5v5h-5z" />
          <path fill="#ffcc78" d="M31 18h7v7h-7z" />
          <path fill="#f38a53" d="m53 54-7-12-7 10-11 2 8 9-3 13 13-7 11 7-2-14 8-7z" />
          <path fill="#bd5360" d="M41 50h5v5h-5zm10 10h5v5h-5z" />
        </g>
        <g fill="#c3a1d1">
          <path d="M147 574h7v7h-7zm8-8h7v7h-7zm8 10h7v7h-7zm-6 9h7v7h-7zm-14 2h7v7h-7zM1000 570h7v7h-7zm8-8h7v7h-7zm8 10h7v7h-7zm-6 9h7v7h-7zm-14 2h7v7h-7z" />
        </g>
        <g fill="#81688e">
          <path d="M159 577h5v5h-5zm-13 10h5v5h-5zm861-8h5v5h-5zm-14 9h5v5h-5z" />
        </g>
        <g fill="#c3a1d1">
          <path d="M252 575h7v7h-7zm8-8h7v7h-7zm8 10h7v7h-7zm-6 9h7v7h-7zm-14 2h7v7h-7zm690-13h7v7h-7zm8-8h7v7h-7zm8 10h7v7h-7zm-6 9h7v7h-7zm-14 2h7v7h-7z" />
        </g>
        <g fill="#7d9260">
          <path d="M263 598h4v-17h-4zm702 0h4v-17h-4z" />
        </g>
      </g>

      <g className="garden-roses" shapeRendering="crispEdges">
        <g transform="translate(238 520)">
          <path fill="none" stroke="#667b55" strokeWidth="4" d="M20 88V36m31 52V19m28 69V41" />
          <path fill="#788d5e" d="m18 64-15-9 5 15 13 3zm34-28 15-10-5 17-13 4zm28 27 16-9-5 16-14 3z" />
          <path fill="#ac526d" d="M9 33V21h7V14h10v7h7v12h-7v8H16v-8zm26-17V8h7V1h12v7h7v11h-8v8H42v-9zm23 30V35h7v-7h11v7h7v12h-8v8H65v-7z" />
          <path fill="#e28c9d" d="M16 21h7v7h7v7h-7v7h-7v-8H9v-6h7zm27-13h8v7h7v5h-8v7h-8v-7h-7v-5h8zm20 27h7v7h7v5h-8v8h-7v-7h-7v-6h8z" />
          <path fill="#f1c0b4" d="M19 27h7v6h-7zm26-13h8v6h-8zm21 27h7v6h-7z" />
        </g>
        <g transform="translate(892 527)">
          <path fill="none" stroke="#667b55" strokeWidth="4" d="M20 81V34m30 47V17m29 64V38" />
          <path fill="#788d5e" d="m19 61-15-9 5 15 13 3zm32-28 15-10-5 17-13 4zm28 27 16-9-5 16-14 3z" />
          <path fill="#ac526d" d="M9 31V19h7v-7h10v7h7v12h-7v8H16v-8zm26-15V6h7V0h12v7h7v11h-8v8H42v-9zm23 30V34h7v-7h11v7h7v12h-8v8H65v-7z" />
          <path fill="#e28c9d" d="M16 19h7v7h7v7h-7v7h-7v-8H9v-6h7zm27-12h8v7h7v5h-8v7h-8v-7h-7v-5h8zm20 27h7v7h7v5h-8v8h-7v-7h-7v-6h8z" />
          <path fill="#f1c0b4" d="M19 25h7v6h-7zm26-13h8v6h-8zm21 27h7v6h-7z" />
        </g>
        <g className={`planted-rose${rosePlanted ? " is-visible" : ""}`} transform="translate(358 515)">
          <path fill="none" stroke="#667b55" strokeWidth="4" d="M20 91V38m29 53V17m28 74V43" />
          <path fill="#788d5e" d="m18 65-15-9 5 15 13 3zm31-29 15-10-5 17-13 4zm28 29 16-9-5 16-14 3z" />
          <path fill="#a74464" d="M9 34V22h7v-7h10v7h7v12h-7v8H16v-8zm25-19V8h7V1h12v7h7v11h-8v8H41v-9zm24 33V36h7v-7h11v7h7v12h-8v8H64v-7z" />
          <path fill="#e58ea4" d="M16 22h7v7h7v5h-7v8h-7v-8H9v-5h7zm26-13h8v7h7v5h-8v7h-7v-7h-7v-5h7zm20 34h7v7h7v5h-8v8h-7v-7h-7v-6h8z" />
          <path fill="#f6c6c0" d="M19 28h7v6h-7zm25-14h8v6h-8zm21 27h7v6h-7z" />
        </g>
      </g>
    </svg>
  );
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState("");
  const [rosePlanted, setRosePlanted] = useState(false);
  const [floatingPetals, setFloatingPetals] = useState<FloatingPetal[]>([]);
  const petalId = useRef(0);

  function stirPetals(event: MouseEvent<HTMLButtonElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextPetal = {
      id: petalId.current++,
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    };

    setFloatingPetals((current) => [...current.slice(-7), nextPetal]);
  }

  async function toggleMusic() {
    const audio = audioRef.current;

    if (!audio) {
      setAudioError("The music player is unavailable right now.");
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setAudioError("");
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setAudioError("");
    } catch {
      setAudioError("The song could not be played. Please try again.");
      setIsPlaying(false);
    }
  }

  return (
    <main className="love-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topline">
        <a className="wordmark" href="#home" aria-label="A little love story for Asha">
          <span className="wordmark-heart">✦</span> after dark
        </a>
        <span className="topline-note">A QUIET NIGHT IN THE GARDEN</span>
      </header>

      <section className="intro" id="home" aria-labelledby="page-title">
        <div className="eyebrow"><span /> THE GARDEN AFTER DARK <span /></div>
        <h1 id="page-title"><span>Asha</span>, after dark.</h1>
        <p className="intro-copy">A quiet evening beneath a familiar moon.</p>
      </section>

      <section className={`story-card${isPlaying ? " is-playing" : ""}`} aria-label="A moonlit love story">
        <div className="scene-wrap">
          <div className="scene-topline">
            <span><i /> THE GARDEN AFTER DARK</span>
            <span className="scene-chapter">AFTER HOURS <b>✦</b></span>
          </div>
          <button
            className="scene-window"
            type="button"
            onClick={stirPetals}
            aria-label="Moonlit garden. Tap to send rose petals drifting."
          >
            <MoonlitGarden rosePlanted={rosePlanted} />
            {floatingPetals.map((petal) => (
              <span
                className="petal-burst"
                key={petal.id}
                style={{ left: `${petal.x}%`, top: `${petal.y}%` }}
                aria-hidden="true"
              >
                <i /><i /><i /><i />
              </span>
            ))}
            <div className="pixel-border" aria-hidden="true">
              <span className="corner corner-tl">✿</span>
              <span className="corner corner-tr">✿</span>
              <span className="corner corner-bl">✿</span>
              <span className="corner corner-br">✿</span>
            </div>
            <div className="speech-bubble" aria-hidden="true">
              <span className="speech-sparkle">✧</span>
              <span className="speech-lines">
                <span className="speech-line speech-line-one">Stay close. Night is falling.</span>
                <span className="speech-line speech-line-two">The moon keeps our secrets.</span>
                <span className="speech-line speech-line-three">Let the dawn wait a while.</span>
              </span>
              <span className="speech-sparkle">✧</span>
            </div>
            <div className="scene-caption" aria-hidden="true">
              <span className="caption-heart">✦</span>
              <span>Somewhere beneath the old moon</span>
            </div>
            <div className="scene-signature" aria-hidden="true">A <span>✦</span></div>
          </button>
          <div className="scene-bottomline">
            <span>✦ &nbsp; TAP THE GARDEN FOR PETALS &nbsp; ✦</span>
            <span>UNDER THE FULL MOON</span>
          </div>
        </div>

        <div className="card-footer">
          <div className="story-beats" aria-label="Story scenes">
            <span className="beat"><i>01</i> THE MEETING</span>
            <span className="beat-divider">✦</span>
            <span className="beat"><i>02</i> THE PROMISE</span>
            <span className="beat-divider">✦</span>
            <span className="beat"><i>03</i> FOREVERMORE</span>
          </div>
          <div className="story-actions">
            <button
              className={`rose-button${rosePlanted ? " is-planted" : ""}`}
              onClick={() => setRosePlanted((planted) => !planted)}
              type="button"
              aria-pressed={rosePlanted}
            >
              <span className="rose-button-icon" aria-hidden="true">✿</span>
              <span>{rosePlanted ? "Remove rose" : "Leave a rose"}</span>
            </button>
            <button
              className={`music-button${isPlaying ? " is-playing" : ""}`}
              onClick={toggleMusic}
              type="button"
              aria-pressed={isPlaying}
            >
              <span className="music-icon" aria-hidden="true">{isPlaying ? "Ⅱ" : "♫"}</span>
              <span>{isPlaying ? "Pause the music" : "Play the music"}</span>
            </button>
          </div>
        </div>
        <p className="interaction-hint" aria-live="polite">
          {rosePlanted ? "A rose, quietly left in the garden." : "Tap the scene to stir the petals, or leave a rose."}
        </p>
        {audioError && <p className="audio-error" role="status">{audioError}</p>}
        <audio
          ref={audioRef}
          src="/music/8-bit%20song.mp3"
          loop
          preload="none"
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
        />
      </section>

      <section className="poetry-section" aria-labelledby="poetry-title">
        <div className="poetry-heading">
          <div className="eyebrow"><span /> LETTERS FROM THE MIDNIGHT HOUR <span /></div>
          <h2 id="poetry-title">For the one my heart would find in every lifetime.</h2>
          <p>Three little vows, written beneath the same old moon.</p>
        </div>
        <div className="poem-grid">
          <article className="poem-card">
            <span className="poem-number">I &nbsp;·&nbsp; THE VOW</span>
            <h3>A Vow Beyond the Night</h3>
            <p>
              When midnight lays its velvet on the hill,<br />
              And every candle bows its head,<br />
              I would cross a thousand winters still<br />
              To find your hand and call you beloved.
            </p>
            <span className="poem-flourish" aria-hidden="true">✦</span>
          </article>
          <article className="poem-card poem-card-featured">
            <span className="poem-number">II &nbsp;·&nbsp; FOREVERMORE</span>
            <h3>My Love for You Is Eternal</h3>
            <p>
              The storm had led you to my door,<br />
              your lantern trembling in the rain.<br />
              I welcomed you into the candlelit hall,<br />
              and the old house felt alive again.
            </p>
            <p>
              We talked while midnight crossed the windows;<br />
              the thunder wandered into the distance.<br />
              At dawn, I walked with you beyond the gate,<br />
              already longing for your return.
            </p>
            <p>
              Years may turn the pages of our story,<br />
              and stars may fade above the sea—<br />
              still, in every life, through every darkness,<br />
              my eternal love will lead me back to thee.
            </p>
            <span className="poem-flourish" aria-hidden="true">✧</span>
          </article>
          <article className="poem-card">
            <span className="poem-number">III &nbsp;·&nbsp; THE RETURN</span>
            <h3>Meet Me at the Castle Gate</h3>
            <p>
              Let thunder write our names across the sky,<br />
              Let ivy guard the doorway where we meet;<br />
              Through every shadow, every long goodbye,<br />
              my heart will know the sound of your heartbeat.
            </p>
            <span className="poem-flourish" aria-hidden="true">✦</span>
          </article>
        </div>
      </section>

      <footer className="page-footer">
        <span>A LITTLE SOMETHING FOR ASHA</span>
        <span className="footer-flourish">✧ &nbsp; ✦ &nbsp; ✧</span>
        <span>JUST A QUIET NIGHT.</span>
      </footer>
    </main>
  );
}
