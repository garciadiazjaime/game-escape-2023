import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div> armario frío con luz interior</div>;
  }

  return (
    <div>
      <div>
        📷 : ...😂<span style={{ color: "red" }}>❤️</span>🎄
      </div>
      <div>📍?</div>
    </div>
  );
}
