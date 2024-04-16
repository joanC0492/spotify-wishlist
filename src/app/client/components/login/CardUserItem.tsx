import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";

interface Props {
  className?: string;
}
export const CardUserItem = ({ className }: Props) => {
  return (
    <Card className={className}>
      <CardActionArea>
        <Avatar
          alt="Christian"
          src="/users/christian.webp"
          className="w-16 h-16 mx-auto mt-4"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
