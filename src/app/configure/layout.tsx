import Steps from "@/components/configure/Steps";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface LayoutConfigureProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutConfigureProps) {
  const { children } = props;
  return (
    <MaxWidthWrapper className="fle flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
}
