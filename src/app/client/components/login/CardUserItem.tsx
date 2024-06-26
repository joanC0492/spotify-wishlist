import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import { User } from "@/types/client/user";

interface Props {
  user: User;
  className?: string;
}
export const CardUserItem = ({ user, className }: Props) => {
  return (
    <Card className={className}>
      <CardActionArea>
        <Avatar
          alt="Christian"
          src={user.image || "/users/christian.webp"}
          className="w-16 h-16 mx-auto mt-4"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {user.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
