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
            ORD - <span className={styles.blur}>JFK</span>
          </div>
          <div className={styles.blurLight}>04/24/2024 6:25PM</div>
          <Countdown date={new Date("2023-12-25T12:00:00")} />
        </div>
        <div
          style={{
            borderBottom: "4px dashed #AAA",
            paddingBottom: 40,
            marginBottom: 40,
          }}
        >
          <div className={styles.blur}>JFK - DOH</div>
          <div className={styles.blur}>04/25/2024 1:15AM</div>
          <Countdown date={new Date("2023-12-26T12:00:00")} />
        </div>
        <div>
          <div className={styles.blur}>DOH - MLE</div>
          <div className={styles.blur}>04/26/2024 3:05AM</div>
          <Countdown date={new Date("2024-01-01T12:00:00")} />
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
          <div className={styles.blur}>MLE - KUL</div>
          <div className={styles.blur}>04/29/2024 8:55PM</div>
          <Countdown date={new Date("2024-01-02T12:00:00")} />
        </div>
        <div>
          <div className={styles.blur}>KUL - HAN</div>
          <div className={styles.blur}>04/30/2024 6:10AM</div>
          <Countdown date={new Date("2024-01-03T12:00:00")} />
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
          <div className={styles.blur}>HAN - TPE</div>
          <div className={styles.blur}>05/10/2024 12:05PM</div>
          <Countdown date={new Date("2024-01-04T12:00:00")} />
        </div>
        <div
          style={{
            paddingBottom: 40,
          }}
        >
          <div className={styles.blur}>TPE - ORD</div>
          <div className={styles.blur}>05/10/2024 6:40PM</div>
          <Countdown date={new Date("2023-12-27T12:00:00")} />
        </div>
      </div>
    </div>
  );
}
