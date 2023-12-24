"use client";

import { useRef, useState, useEffect } from "react";

import Countdown from "react-countdown";

import Step0 from "@/components/step-0-start";
import Step1 from "@/components/step-1-susy";
import Step2 from "@/components/step-2-susy";
import Step3 from "@/components/step-3-nirvan";
import Step4 from "@/components/step-4-nirvan";
import Step5 from "@/components/step-5-ari";
import Step6 from "@/components/step-6-ari";
import Step7 from "@/components/step-7-makey";
import Step8 from "@/components/step-8-makey";
import Step9 from "@/components/step-9-end";

const steps = [
  Step0,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
];

const LAST_STEP = 9;

function getComponent(step: number) {
  return steps[step] || Step0;
}

const renderer = ({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}) => {
  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
};

export default function Home() {
  const inputRef = useRef(null);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState(false);

  const KeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      nextHandler();
    }
  };

  const nextHandler = () => {
    if (!inputRef.current) {
      return;
    }

    const value = (inputRef.current["value"] as string).toLowerCase();

    switch (step) {
      case 0:
        setStep(1);
        break;
      case 1:
        if (value === "rocio") {
          setStep(2);
        }
        break;
      case 2:
        if (value === "moreno") {
          setStep(3);
        }
        break;
      case 3:
        if (value === "mente") {
          setStep(4);
        }
        break;
      case 4:
        if (value === "metallica") {
          setStep(5);
        }
        break;
      case 5:
        if (value === "trimmigrantes") {
          setStep(6);
        }
        break;
      case 6:
        if (value === "ratigan") {
          setStep(7);
        }
        break;
      case 7:
        if (value === "makey") {
          setStep(8);
        }
        break;
      case 8:
        if (value === "solopot") {
          setStep(9);
        }
        break;
    }
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current["value"] = "" as never;
    setStatus(false);
  }, [step]);

  const Component = getComponent(step);

  return (
    <main
      style={{
        height: "100vh",
        border: "10px double #333",
        boxSizing: "border-box",
        padding: 12,
        fontSize: 30,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "fantasy",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {step !== LAST_STEP && (
          <Countdown date={Date.now() + 60_000 * 6.5} renderer={renderer} />
        )}
        {![0, LAST_STEP].includes(step) && (
          <div style={{ fontSize: 40 }} onClick={() => setStatus(true)}>
            ❓
          </div>
        )}
      </div>

      <Component status={status} />

      <div>
        <input
          style={{
            boxSizing: "border-box",
            width: "100%",
            padding: 12,
            fontSize: 30,
            visibility: [0, LAST_STEP].includes(step) ? "hidden" : "initial",
            marginBottom: 12,
            opacity: 0.8,
          }}
          type="text"
          ref={inputRef}
          onKeyDown={KeyDownHandler}
        />

        {step !== LAST_STEP && (
          <button
            style={{
              width: "100%",
              padding: 12,
              fontSize: 30,
              background: "white",
            }}
            onClick={nextHandler}
          >
            Continuar
          </button>
        )}
      </div>
    </main>
  );
}
