import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>Los días de lluvia son los días que más bailan</div>;
  }

  return (
    <div>
      <div>Apellido materno</div>
      <div>de la hija</div>
      <div>que es mamá</div>
      <div>del papá</div>
      <div>que es tio</div>
      <div>de betina</div>
      <div>que es hija</div>
      <div>del hijo de la persona en cuestión</div>
    </div>
  );
}
