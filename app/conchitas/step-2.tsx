import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>los días de lluvia son los días que más bailo</div>;
  }

  return (
    <div>
      <div>apellido materno</div>
      <div>de la hija</div>
      <div>que es sobrina</div>
      <div>del hijo de la abuela</div>
      <div>de andrea-a</div>
    </div>
  );
}
