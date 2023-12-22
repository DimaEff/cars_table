import {FC, useState} from "react";
import {SettingsDto} from "../../api/models/SettingsDto.ts";
import {IconButton} from "../Button";
import addIcon from "../../assets/addIcon.svg";
import {css} from "@emotion/css";
import {EmptyData, Table, TableHeaderCell, TableHeaderRow} from "../Table";
import EventRow from "./EventRow.tsx";
import EventForm from "./EventForm.tsx";
import {createEvent} from "../../api/adminApi.ts";
import {useQuery} from "react-query";
import {QUERIES_KEYS} from "../../queriesKeys.ts";

const tableColumns = ['автомобиль', 'точка', 'событие', 'ожидание, сек']

interface EventsTableProps {
    events: SettingsDto['events']
    cars: SettingsDto['cars']
    points: SettingsDto['points']
    typeOfEvents: SettingsDto['type_of_events']
}

const EventsTable: FC<EventsTableProps> = ({events, cars, points, typeOfEvents}) => {
    const [creatingMode, setCreatingMode] = useState(false)

    const {refetch} = useQuery(QUERIES_KEYS.GET_SETTINGS, {
        refetchOnWindowFocus: false,
        enabled: false,
    })

    const handleCreatePoint = async (data: any) => {
        setCreatingMode(false)
        await createEvent(data)
        await refetch()
    }

    return (
        <div>
            <Table>
                <TableHeaderRow tableName={'АВТОМОБИЛИ'}>
                    {tableColumns.map(n => <TableHeaderCell key={n}>{n.toLocaleUpperCase()}</TableHeaderCell>)}
                </TableHeaderRow>
                <tbody>
                {events === 0 && <EmptyData/>}
                {events !== 0 && cars !== 0 && points !== 0 && events.map(e => <EventRow key={e.event_id} event={e}
                                                                                         cars={cars}
                                                                                         points={points}
                                                                                         typeOfEvents={typeOfEvents}
                    />
                )}
                {creatingMode && cars !== 0 && points !== 0 &&
                    <EventForm cars={cars} points={points} handleCreatePoint={handleCreatePoint}
                               typeOfEvents={typeOfEvents}/>}
                </tbody>
            </Table>
            <IconButton onClick={() => setCreatingMode(m => !m)}><img src={addIcon} className={css`
                width: 32px;
            `}/></IconButton>
        </div>
    )
        ;
};

export default EventsTable;