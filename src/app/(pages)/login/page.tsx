import { NextPage } from "next";
// import { CardUserItem, CardUserList } from "../../shared/components/ui";

const LoginPage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="mx-4 mt-4 xl:mx-auto max-w-screen-sm">
            <div className="bg-spotify-gray p-4 rounded-lg md:py-8 md:px-12">
              <p className="text-2xl">¿Quién soy?</p>
              <div className="">
                {/* <CardUserList className="grid grid-cols-12 gap-4 mt-5">
                  {[...new Array(5)].map((_, i, array) => (
                    <CardUserItem
                      key={i}
                      className={`${
                        array.length === i + 1
                          ? "col-start-4 col-span-6"
                          : "col-span-6"
                      }`}
                    />
                  ))}
                </CardUserList> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
