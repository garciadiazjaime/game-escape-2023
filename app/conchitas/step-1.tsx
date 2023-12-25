import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>entre más lavo, más sucia estoy</div>;
  }

  return (
    <div>
      <div>RKZN 🎥 😍❤️💕✨</div>
    </div>
  );
}
