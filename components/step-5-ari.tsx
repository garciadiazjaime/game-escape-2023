import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>Koro</div>;
  }

  return (
    <div>
      <div>Sam</div>
      <div>Facu</div>
      <div>Mostra</div>
      <div>Luci</div>
      <div>Mike</div>
    </div>
  );
}
