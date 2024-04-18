import { NextPage } from "next";
import { getAllActiveUsers } from "@/app/client/services/user/getAllActiveUsers";
// import { CardUserItem, CardUserList } from "@/app/client/components/Login";
// import { cn } from "@/app/client/helpers";
// import { Alert } from "@mui/material";

const LoginPage: NextPage = async () => {
  const users = await getAllActiveUsers();
  console.log(users);
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="mx-4 mt-4 xl:mx-auto max-w-screen-sm">
            <div className="bg-spotify-gray p-4 rounded-lg md:py-8 md:px-12">
              <div className="xl:max-w-xs xl:mx-auto">
                <p className="text-2xl">¿Quién soy?</p>

                {/* {users.length !== 0 ? (
                  <CardUserList className="grid grid-cols-12 gap-4 mt-5">
                    {users.map((user, i, array) => (
                      <CardUserItem
                        key={i}
                        user={user}
                        className={cn(
                          "col-span-6 text-center",
                          array.length === i + 1 && "col-start-4"
                        )}
                      />
                    ))}
                  </CardUserList>
                ) : (
                  <Alert severity="error" className="mt-5">
                    No hay usuarios
                  </Alert>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
