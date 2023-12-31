import {useQuery} from "react-query";
import {QUERIES_KEYS} from "./queriesKeys.ts";
import {getSettings} from "./api/adminApi.ts";
import {css} from "@emotion/css";
import CarsTable from "./components/CarsTable/CarsTable.tsx";
import {ControlPointsTable} from "./components/ControlPointsTable";
import {EventsTable} from "./components/EventsTable";
import UsersTable from "./components/UsersTable/UsersTable.tsx";
import {Company} from "./components/Company";

function App() {
    const {data} = useQuery(QUERIES_KEYS.GET_SETTINGS, getSettings);

    return (
        <div className={css`
            display: flex;
            justify-content: center;
            width: 100%;
        `}>
            <div
                className={css`
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    width: 860px;
                `}
            >
                {data !== undefined && <Company company={data.company}/>}
                {data !== undefined && <CarsTable cars={data.cars} icons={data.icons}/>}
                {data !== undefined && <ControlPointsTable points={data.points}/>}
                {data !== undefined && <EventsTable events={data.events} cars={data.cars} points={data.points}
                                                    typeOfEvents={data.type_of_events}/>}
                {data !== undefined && <UsersTable users={data.users} roles={data.roles}/>}
            </div>
        </div>
    );
}

export default App;
