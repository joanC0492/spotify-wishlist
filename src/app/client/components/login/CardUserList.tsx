import { cn } from "@/app/client/helpers";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const CardUserList = ({ className = "", children }: Props) => {
  return <div className={cn(className)}>{children}</div>;
};
