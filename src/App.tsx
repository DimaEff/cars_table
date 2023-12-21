import {useQuery} from "react-query";
import {QUERIES_KEYS} from "./queriesKeys.ts";
import {getSettings} from "./api/adminApi.ts";
import {css} from "@emotion/css";
import CarsTable from "./components/CarsTable/CarsTable.tsx";

function App() {
    const {data} = useQuery(QUERIES_KEYS.GET_SETTINGS, getSettings);

    return (
        <div
            className={css`
                display: flex;
                flex-direction: column;
                gap: 8px;
            `}
        >
            {data !== undefined && <CarsTable cars={data.cars} icons={data.icons}/>}
        </div>
    );
}

export default App;
