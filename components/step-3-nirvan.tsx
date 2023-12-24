import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>Es venta y no se vende, es Ana, pero no es gente</div>;
  }

  return (
    <div>
      <div>tiempo</div>
      <div>espacio</div>
      <div>realidad</div>
      <div>poder</div>
    </div>
  );
}
