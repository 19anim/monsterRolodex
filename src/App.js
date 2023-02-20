import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import AppTitle from "./routes/app-title/app-title.component";
import MonsterDetail from "./routes/monster-detail/monster-detail.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  function loaderrr(){
    console.log("Load")
  }
  useEffect(() => {
    fetch(
      "https://63e003b759bccf35dabdcd84.mockapi.io/monstersrolodex/monsters"
    )
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchString]);

  const onSearchHandler = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchString(searchString);
  };

  const resetFilter = () => {
    setSearchString("");
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppTitle />}>
          <Route
            index
            element={
              <>
                <SearchBox
                  className="search-box-monster"
                  placeholder="Search Monster"
                  onChangeHandler={onSearchHandler}
                />
                <CardList monsters={filteredMonsters} />
              </>
            }
          />
          <Route path="/monsters/:monsterId" element={<MonsterDetail resetFilter={resetFilter}/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
