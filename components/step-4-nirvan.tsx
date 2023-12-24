import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>Por ella subes por ella bajas</div>;
  }

  return (
    <div>
      <div>r..t trjll</div>
    </div>
  );
}
