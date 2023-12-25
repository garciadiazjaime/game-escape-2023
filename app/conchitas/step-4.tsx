import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>por ella subes por ella bajas</div>;
  }

  return (
    <div>
      <div>0 posts</div>
      <div>0 followers</div>
      <div>XX following</div>
    </div>
  );
}
