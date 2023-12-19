import {useQuery} from "react-query";
import {QUERIES_KEYS} from "./queriesKeys.ts";
import {getSettings} from "./api/adminApi.ts";
import {IconButton} from "./components/Button/intex.ts";


function App() {
    const {data} = useQuery(QUERIES_KEYS.GET_SETTINGS, getSettings)

    return (<IconButton loading={true} onClick={() => console.log(data)}>show settings</IconButton>)
}

export default App
