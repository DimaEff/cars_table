import {FC, useState} from 'react';
import {EmptyData, Table, TableHeaderCell, TableHeaderRow} from "../Table";
import {SettingsDto} from "../../api/models/SettingsDto.ts";
import CarRow from "./CarRow.tsx";
import CarForm from "./CarForm.tsx";
import {IconButton} from "../Button";
import {createCar} from "../../api/adminApi.ts";
import {useQuery} from "react-query";
import {QUERIES_KEYS} from "../../queriesKeys.ts";
import addIcon from "../../assets/addIcon.svg"
import {css} from "@emotion/css";

const tableColumns = ['имя', 'иконка', 'imei', 'imei-2']

interface CarsTableProps {
    cars: SettingsDto['cars']
    icons: SettingsDto['icons']
}

const CarsTable: FC<CarsTableProps> = ({cars, icons}) => {
    const [creatingMode, setCreatingMode] = useState(false)

    const {refetch} = useQuery(QUERIES_KEYS.GET_SETTINGS, {
        refetchOnWindowFocus: false,
        enabled: false,
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreateCar = async (data: any) => {
        setCreatingMode(false)
        await createCar(data);
        await refetch();
    }

    return (
        <div>
            <Table>
                <TableHeaderRow tableName={'АВТОМОБИЛИ'}>
                    {tableColumns.map(n => <TableHeaderCell key={n}>{n.toLocaleUpperCase()}</TableHeaderCell>)}
                </TableHeaderRow>
                <tbody>
                {cars === 0 && <EmptyData/>}
                {
                    cars !== 0 && cars.map(c => <CarRow key={c.car_id} car={c}/>)
                }
                {creatingMode && <CarForm icons={icons} handleCreateCar={handleCreateCar}/>}
                </tbody>
            </Table>
            <IconButton onClick={() => setCreatingMode(true)}><img src={addIcon} className={css`
                width: 32px;
            `}/></IconButton>
        </div>
    );
};

export default CarsTable;