import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>es venta y no se vende, es Ana, pero no es gente</div>;
  }

  return (
    <div>
      <div>arturo perez</div>
    </div>
  );
}
