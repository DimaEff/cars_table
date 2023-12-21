import {TableCell, TableRow, TableSelectCell} from "../Table";
import {IconButton} from "../Button";
import closeIcon from "../../assets/closeIcon.svg";
import {useQuery} from "react-query";
import {QUERIES_KEYS} from "../../queriesKeys.ts";
import {PointDto} from "../../api/models/PointDto.ts";
import {FC, useMemo} from "react";
import {deleteEvent, saveEvent, SaveEventDto} from "../../api/adminApi.ts";
import {EventDto} from "../../api/models/EventDto.ts";
import {CarDto} from "../../api/models/CarDto.ts";
import {Option} from "../Input";
import {EVENTS_TYPES_NAMES} from "../../constants.ts";

interface EventRowProps {
    event: EventDto
    cars: CarDto[]
    points: PointDto[]
    typeOfEvents: string[]
}

const EventRow: FC<EventRowProps> = ({event, cars, points, typeOfEvents}) => {
    const {isLoading, refetch} = useQuery(QUERIES_KEYS.DELETE_EVENT(event.event_id), () => deleteEvent(event.event), {
        refetchOnWindowFocus: false,
        enabled: false
    })

    const settingsQuery = useQuery(QUERIES_KEYS.GET_SETTINGS, {
        refetchOnWindowFocus: false,
        enabled: false,
    })

    const carsOptions = useMemo(() => cars.map(c => ({value: c.car_id, label: c.name})), [cars])
    const carValueOption = useMemo(() => carsOptions.find(c => c.value === event.car_id) ?? null, [carsOptions, event])
    const handleChangeCarValue = async (o: Option) => {
        // @ts-ignore
        await saveEvent({...event, car_id: o.value} as SaveEventDto)
        await settingsQuery.refetch()
    }

    const pointsOptions = useMemo(() => points.map(c => ({value: c.point_id, label: c.name})), [points])
    const pointValueOption = useMemo(() => carsOptions.find(c => c.value === event.point_id) ?? null, [pointsOptions, event])
    const handleChangePointValue = async (o: Option) => {
        // @ts-ignore
        await saveEvent({...event, point_id: o.value} as SaveEventDto)
        await settingsQuery.refetch()
    }

    // @ts-ignore
    const actionOptions = useMemo(() => typeOfEvents.map(e => ({value: e, label: EVENTS_TYPES_NAMES[e]})), [typeOfEvents])
    const actionValueOption = useMemo(() => actionOptions.find(c => c.value === event.event) ?? null, [event])
    const handleChangeEventValue = async (o: Option) => {
        // @ts-ignore
        await saveEvent({...event, event: o.value} as SaveEventDto)
        await settingsQuery.refetch()
    }

    return (
        <TableRow leftActionSlot={<IconButton loading={isLoading} onClick={() => refetch()}>
            <img src={closeIcon}/>
        </IconButton>}>
            <TableSelectCell value={carValueOption} options={carsOptions} handleChangeValue={handleChangeCarValue}/>
            <TableSelectCell value={pointValueOption} options={pointsOptions}
                             handleChangeValue={handleChangePointValue}/>
            <TableSelectCell value={actionValueOption} options={actionOptions}
                             handleChangeValue={handleChangeEventValue}/>
            <TableCell>
                {event.time_response_sec}
            </TableCell>
        </TableRow>
    );
};

export default EventRow;