"use client";

import Countdown from "react-countdown";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ fontSize: 48, fontFamily: "monospace", textAlign: "center" }}>
      <div style={{ border: "10px double black" }}>
        <div>🛫</div>
        <div
          style={{
            borderBottom: "4px dashed #AAA",
            paddingBottom: 40,
            marginBottom: 40,
          }}
        >
          <div>
            ORD - <span>JFK</span>
          </div>
          <div>04/24/2024 6:25PM</div>
        </div>
        <div
          style={{
            borderBottom: "4px dashed #AAA",
            paddingBottom: 40,
            marginBottom: 40,
          }}
        >
          {/*  JFK - DOH */}
          <div className={styles.blur}>nice try</div>
          <div className={styles.blur}>04/25/2024 1:15AM</div>
          <Countdown date={new Date("2024-03-30T12:00:00")} />
        </div>
        <div>
          {/* DOH - MLE */}
          <div className={styles.blur}>nice try </div>
          <div className={styles.blur}>04/26/2024 3:05AM</div>
          <Countdown date={new Date("2024-03-30T12:00:00")} />
        </div>
      </div>

      <div style={{ border: "10px double black", marginTop: 84 }}>
        <div>🛫</div>
        <div
          style={{
            borderBottom: "4px dashed #AAA",
            paddingBottom: 40,
            marginBottom: 40,
          }}
        >
          {/* MLE - KUL */}
          <div className={styles.blur}>nice try </div>
          <div className={styles.blur}>04/29/2024 8:55PM</div>
          <Countdown date={new Date("2024-03-30T12:00:00")} />
        </div>
        <div>
          {/* KUL - HAN */}
          <div className={styles.blur}>nice try </div>
          <div className={styles.blur}>04/30/2024 6:10AM</div>
          <Countdown date={new Date("2024-03-30T12:00:00")} />
        </div>
      </div>

      <div style={{ border: "10px double black", marginTop: 84 }}>
        <div>🛫</div>
        <div
          style={{
            borderBottom: "4px dashed #AAA",
            paddingBottom: 40,
            marginBottom: 40,
          }}
        >
          <div>HAN - TPE</div>
          <div>05/10/2024 12:05PM</div>
        </div>
        <div
          style={{
            paddingBottom: 40,
          }}
        >
          <div>TPE - ORD</div>
          <div>05/10/2024 6:40PM</div>
          <Countdown date={new Date("2023-12-27T12:00:00")} />
        </div>
      </div>
    </div>
  );
}
