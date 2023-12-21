import {FC} from 'react';
import {TableCell, TableRow} from "../Table";
import {IconButton} from "../Button";
import closeIcon from '../../assets/closeIcon.svg'
import {useQuery} from "react-query";
import {QUERIES_KEYS} from "../../queriesKeys.ts";
import {deletePoint} from "../../api/adminApi.ts";
import {PointDto} from "../../api/models/PointDto.ts";

interface CarRowProps {
    point: PointDto
}

const ControlPointRow: FC<CarRowProps> = ({point}) => {
    const {isLoading, refetch} = useQuery(QUERIES_KEYS.DELETE_POINT(point.point_id), () => deletePoint(point.point_id), {
        refetchOnWindowFocus: false,
        enabled: false
    })
    return (
        <TableRow
            leftActionSlot={
                <IconButton loading={isLoading} onClick={() => refetch()}>
                    <img src={closeIcon}/>
                </IconButton>
            }>
            <TableCell>
                {point.name}
            </TableCell>
            <TableCell>
                {point.lat}
            </TableCell>
            <TableCell>
                {point.radius}
            </TableCell>
        </TableRow>
    );
};

export default ControlPointRow;