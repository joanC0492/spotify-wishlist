import cn from "@/shared/helpers/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const CardUserList = ({ className = "", children }: Props) => {
  return <div className={cn(className)}>{children}</div>;
};
