import * as z from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "../Input";
import {FC, useCallback, useMemo} from "react";
import {TableRow} from "../Table";
import {IconButton} from "../Button";
import checkIcon from '../../assets/checkIcon.svg'
import {CarDto} from "../../api/models/CarDto.ts";
import {PointDto} from "../../api/models/PointDto.ts";
import Select from "react-select";

const formSchema = z.object({
    car_id: z.string(),
    point_id: z.string(),
    event: z.string(),
    time_response_sec: z.number().optional()
})

interface CarFormProps {
    cars: CarDto[]
    points: PointDto[]
    handleCreatePoint: (data: z.infer<typeof formSchema>) => Promise<void>
}

const ControlPointForm: FC<CarFormProps> = ({points, cars, handleCreatePoint}) => {
    const {handleSubmit, register, formState: {errors}, control} = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const carsOptions = useMemo(() => cars.map(c => ({value: c.car_id, label: c.name})), [cars])
    const getCarValueOption = useCallback((car_id: string | null) => carsOptions.find(c => c.value === car_id) ?? null, [carsOptions, event])

    const pointsOptions = useMemo(() => points.map(c => ({value: c.point_id, label: c.name})), [points])
    const getPointValueOption = useCallback((point_id: string | null) => carsOptions.find(c => c.value === point_id) ?? null, [pointsOptions, event])

    const actionOptions = [{value: "IN", label: "ПРИХОД"}, {value: "OUT", label: "УБЫТИЕ"}]
    const getActionValueOption = useCallback((event_type: string | null) => actionOptions.find(c => c.value === event_type) ?? null, [event])

    return (
        <TableRow leftActionSlot={<IconButton onClick={handleSubmit(handleCreatePoint)}><img
            src={checkIcon}/></IconButton>} withoutDivider>
            <td>
                <Controller control={control} name={'car_id'}
                            render={({field}) => <Select placeholder={'Машина'} value={getCarValueOption(field.value ?? null)}
                                                         options={carsOptions}
                                                         onChange={o => field.onChange(o?.value)}/>}/>
            </td>
            <td>
                <Controller control={control} name={'point_id'}
                            render={({field}) => <Select placeholder={'Точка'} value={getPointValueOption(field.value ?? null)}
                                                         options={pointsOptions}
                                                         onChange={o => field.onChange(o?.value)}/>}/>
            </td>
            <td>
                <Controller control={control} name={'event'}
                            render={({field}) => <Select placeholder={'Событие'} value={getActionValueOption(field.value ?? null)}
                                                         options={actionOptions}
                                                         onChange={o => field.onChange(o?.value)}/>}/>
            </td>
            <td>
                <Input {...register('time_response_sec', {valueAsNumber: true})}
                       errorMessage={errors.time_response_sec?.message}
                       placeholder={'Ожидание, сек'}/>
            </td>
        </TableRow>
    );
};

export default ControlPointForm;