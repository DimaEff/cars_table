import {IconButton} from "../Button";
import addIcon from "../../assets/addIcon.svg";
import {css} from "@emotion/css";
import {EmptyData, Table, TableHeaderCell, TableHeaderRow} from "../Table";
import {FC, useState} from "react";
import {SettingsDto} from "../../api/models/SettingsDto.ts";
import ControlPointRow from "./ControlPointRow.tsx";
import ControlPointForm from "./ControlPointForm.tsx";
import {useQuery} from "react-query";
import {QUERIES_KEYS} from "../../queriesKeys.ts";
import {createPoint} from "../../api/adminApi.ts";

const tableColumns = ['имя', 'адрес', 'радиус']

interface ControlPointsTableProps {
    points: SettingsDto['points']
}

const ControlPointsTable: FC<ControlPointsTableProps> = ({points}) => {
    const [creatingMode, setCreatingMode] = useState(false)

    const {refetch} = useQuery(QUERIES_KEYS.GET_SETTINGS, {
        refetchOnWindowFocus: false,
        enabled: false,
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreatePoint = async (data: any) => {
        setCreatingMode(false)
        await createPoint(data);
        await refetch()
    }

    return (
        <div>
            <Table>
                <TableHeaderRow tableName={'КОНТРОЛЬНЫЕ ТОЧКИ'}>
                    {tableColumns.map(n => <TableHeaderCell key={n}>{n.toLocaleUpperCase()}</TableHeaderCell>)}
                </TableHeaderRow>
                <tbody>
                {points === 0 && <EmptyData/>}
                {points !== 0 && points.map(p => <ControlPointRow key={p.point_id} point={p}/>)}
                {creatingMode && <ControlPointForm handleCreatePoint={handleCreatePoint}/>}
                </tbody>
            </Table>
            <IconButton onClick={() => setCreatingMode(true)}><img src={addIcon} className={css`
                width: 32px;
            `}/></IconButton>
        </div>
    );
};

export default ControlPointsTable;