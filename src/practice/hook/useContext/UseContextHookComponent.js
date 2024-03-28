import { useState, createContext, useContext } from "react";
import ChildComponent from "./ChildComponent";

export const UserContext = createContext();
export default function UseContextHookComponent() {
  const [user, setUser] = useState("Jesse Hall");
  const [data, getData] = useState("Default Data");

  function getDataFromChild(data) {
    getData(data);
  }

  return (
    <>
      {/* <UserContext.Provider value={user}> */}
      <UserContext.Provider value={{ userData: user, gettingDataFromChild: getDataFromChild }}>
        <h1>{`Hello ${user}!`}</h1>
        <h2>Data From Child Component "{data}"</h2>
        <ChildComponent />
      </UserContext.Provider>
    </>
  );
}

