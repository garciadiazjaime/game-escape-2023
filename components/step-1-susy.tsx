import { StepProps } from "@/support/types";

export default function Home({ status }: StepProps) {
  if (!status) {
    return <div>Entre más lavo, más sucia estoy</div>;
  }

  return (
    <div>
      <div>antes</div>
      <div>mariposa</div>
      <div>inercia</div>
      <div>gorreon</div>
      <div>alma</div>
      <div>social</div>
      <div>universo</div>
      <div>sol</div>
      <div>yoyo</div>
    </div>
  );
}
