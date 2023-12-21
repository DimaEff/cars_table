import {useQuery} from "react-query";
import {QUERIES_KEYS} from "./queriesKeys.ts";
import {getSettings} from "./api/adminApi.ts";
import {css} from "@emotion/css";
import CarsTable from "./components/CarsTable/CarsTable.tsx";
import {ControlPointsTable} from "./components/ControlPointsTable";

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
            {data !== undefined && <ControlPointsTable points={data.points} />}
        </div>
    );
}

export default App;
