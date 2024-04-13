"use client";
import { NextPage } from "next";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const HomePage: NextPage = () => {
  const handleClick = () => {
    console.log("Hola mundo");
  };

  return (
    <main className="">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="mx-4 mt-4">
              <div className="bg-spotify-gray p-4 rounded-lg">
                <h1 className="text-3xl">VinilloApp</h1>
                <hr className="my-3" />
                <form action="">
                  <TextField
                    type="search"
                    placeholder="¿Qué quieres reproducir?"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchOutlinedIcon className="text-white/45" />
                        </InputAdornment>
                      ),
                    }}
                    className="w-full"
                  />
                </form>
                <Button
                  variant="contained"
                  className="bg-red-400 mt-5"
                  onClick={handleClick}
                >
                  Contained
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
