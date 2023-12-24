import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>cuando me ves te veo y no te parezco feo</div>;
  }

  return (
    <div>
      <div>ihsevat</div>
      <div>_ _ _ _ _ _ _</div>
      <div>ohsocok</div>
      <br />
    </div>
  );
}
