import MainLayout from "layouts/main-layout";
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchGithub } from "service/github";
import { GithubInterface } from "types/github";
import { HomeContextInterface } from "types/home";
import { useDebounce } from "usehooks-ts";
import Card from "./compontes/card/card";

const HomeContext = createContext<HomeContextInterface>({
  github: null,
  search: "",
  handleSearch: () => {},
});

export const useHomeContext = () => useContext(HomeContext);

const Home: React.FC = () => {
  const [github, setGithub] = useState<GithubInterface | null>(null);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce<string>(search, 500);
  const handleGithub = async (username: string) => {
    const data = await fetchGithub(username);
    if (data) {
      setGithub(data);
    }
  };

  useEffect(() => {
    const username = debouncedSearch || "brunodorea";
    handleGithub(username);
  }, [debouncedSearch]);

  return (
    <HomeContext.Provider value={{ github, search, handleSearch: setSearch }}>
      <MainLayout>
        <Card />
      </MainLayout>
    </HomeContext.Provider>
  );
};

export default Home;