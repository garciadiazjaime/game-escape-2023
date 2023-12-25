"use client";

import { useRef, useState, useEffect } from "react";

import Step0 from "./step-0";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";
import Step6 from "./step-6";
import Step7 from "./step-7";
import Step8 from "./step-8";

const steps = [Step0, Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8];

const LAST_STEP = 8;

function getComponent(step: number) {
  return steps[step] || Step0;
}

export default function Home() {
  const inputRef = useRef(null);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState(true);

  const KeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      nextHandler();
    }
  };

  const nextHandler = () => {
    if (!inputRef.current) {
      return;
    }

    const value = (inputRef.current["value"] as string).toLowerCase().trim();

    switch (step) {
      case 0:
        setStep(1);
        break;
      case 1:
        if (value === "little women") {
          setStep(2);
        }
        break;
      case 2:
        if (value === "garcia arteaga") {
          setStep(3);
        }
        break;
      case 3:
        if (value === "revolucion") {
          setStep(4);
        }
        break;
      case 4:
        if (value === "73") {
          setStep(5);
        }
        break;
      case 5:
        if (value === "solrac") {
          setStep(6);
        }
        break;
      case 6:
        if (value === "santa baby bar") {
          setStep(7);
        }
        break;
      case 7:
        if (value === "infinity stones") {
          setStep(8);
        }
        break;
    }
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current["value"] = "" as never;
    // setStatus(false);
  }, [step]);

  const Component = getComponent(step);

  return (
    <main
      style={{
        padding: 12,
        fontSize: 48,
        textAlign: "center",
        fontFamily: "monospace",
        marginTop: 20,
      }}
    >
      <Component status={status} />

      <div style={{ marginTop: 40 }}>
        <input
          style={{
            boxSizing: "border-box",
            width: "100%",
            padding: 12,
            fontSize: 48,
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
              fontSize: 48,
              background: "white",
              border: "1px solid #CCC",
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
