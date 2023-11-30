import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation(){
    console.log(useContext)
    return useContext(NavigationContext);
}

export default useNavigation;