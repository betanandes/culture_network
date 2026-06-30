import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
}

export function PrimaryButton({ children }: Props) {
  return (
    <Button
      className="
        bg-[#ED1E79]
        hover:bg-[#FF4D9C]
        text-white
        rounded-xl
        px-6
        py-6
        transition-all
        duration-300
      "
    >
      {children}
    </Button>
  );
}
