import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div> tengo cuatro patas, pero no corro</div>;
  }

  return (
    <div>
      <div>time</div>
      <div>space</div>
      <div>reality</div>
      <div>power</div>
    </div>
  );
}
