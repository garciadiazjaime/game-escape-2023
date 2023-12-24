import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>luchan reyes y peones</div>;
  }

  return (
    <div>
      <div>hAbía una vez,</div>
      <div>uNa familia</div>
      <div>que se agranDó</div>
      <div>y se mudÓ,</div>
      <div>y al mudar y Bailar</div>
      <div>otro Integrante llEgó</div>
      <div>en el Norte eL acentO</div>
      <div>se adoptó y Con él</div>
      <div>un último llegÓ.</div>
    </div>
  );
}
