import {FC} from 'react';
import {CarDto} from "../../api/models/CarDto.ts";
import {TableCell, TableRow} from "../Table";
import {IconButton} from "../Button";
import closeIcon from '../../assets/closeIcon.svg'
import {useQuery} from "react-query";
import {QUERIES_KEYS} from "../../queriesKeys.ts";
import {deleteCar} from "../../api/adminApi.ts";
import CarIcon from "./CarIcon.tsx";

interface CarRowProps {
    car: CarDto
}

const CarRow: FC<CarRowProps> = ({car}) => {
    const {isLoading, refetch} = useQuery(QUERIES_KEYS.DELETE_CAR(car.car_id), () => deleteCar(car.car_id), {
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
                {car.name}
            </TableCell>
            <td>
                <CarIcon iconUrl={car.pic}/>
            </td>
            <TableCell>
                {car.imei}
            </TableCell>
            <TableCell>
                {car.alter_imei}
            </TableCell>
        </TableRow>
    );
};

export default CarRow;