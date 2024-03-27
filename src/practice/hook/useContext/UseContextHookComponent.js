import { useState, createContext, useContext } from "react";
import ChildComponent from "./ChildComponent";

export const UserContext = createContext();
export default function UseContextHookComponent() {
  const [user, setUser] = useState("Jesse Hall");

  function getDataFromChild(data) {
    console.log(data);
  }

  return (
    <>
      {/* <UserContext.Provider value={user}> */}
      <UserContext.Provider value={{getData: getDataFromChild}}>
        <h1>{`Hello ${user}!`}</h1>
        <ChildComponent />
      </UserContext.Provider>
    </>
  );
}

