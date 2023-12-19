import React, {FC} from 'react';
import {EmptyData, Table, TableHeaderCell, TableHeaderRow} from "../Table";
import {SettingsDto} from "../../api/models/SettingsDto.ts";
import CarRow from "./CarRow.tsx";

const tableColumns = ['имя', 'иконка', 'imei', 'imei-2']

interface CarsTableProps {
    cars: SettingsDto['cars']
}

const CarsTable: FC<CarsTableProps> = ({cars}) => {
    return (
        <Table>
            <TableHeaderRow tableName={'АВТОМОБИЛИ'}>
                {tableColumns.map(n => <TableHeaderCell key={n}>{n.toLocaleUpperCase()}</TableHeaderCell>)}
            </TableHeaderRow>
            <tbody>
            {cars === 0 && <EmptyData/>}
            {
                cars !== 0 && cars.map(c => <CarRow key={c.car_id} car={c}/>)
            }
            </tbody>
        </Table>
    );
};

export default CarsTable;