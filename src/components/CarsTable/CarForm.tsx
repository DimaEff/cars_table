import * as z from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input, Select} from "../Input";
import {FC} from "react";
import {IconDto} from "../../api/models/IconDto.ts";
import CarIcon from "./CarIcon.tsx";
import {TableRow} from "../Table";
import {IconButton} from "../Button";
import checkIcon from '../../assets/checkIcon.svg'

const formSchema = z.object({
    car_name: z.string(),
    icon: z.string(),
    imei: z.string(),
    alter_imei: z.string().optional()
})

interface CarFormProps {
    icons: IconDto[]
    handleCreateCar: (data: z.infer<typeof formSchema>) => Promise<void>
}

const CarForm: FC<CarFormProps> = ({icons, handleCreateCar}) => {
    const {handleSubmit, register, control, formState: {errors}} = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    return (
        <TableRow leftActionSlot={<IconButton onClick={handleSubmit(handleCreateCar)}><img
            src={checkIcon}/></IconButton>}>
            <td>
                <Input {...register('car_name')} errorMessage={errors.car_name?.message} placeholder={'Название'}/>
            </td>
            <td>
                <Controller
                    control={control}
                    name={'icon'}
                    render={
                        ({field, fieldState: {error}}) => <Select value={field.value}
                                                                  onChange={v => field.onChange(v.currentTarget.value)}
                                                                  errorMessage={error?.message}>
                            {icons.map(i =>
                                <option value={i.url} key={i.icon_id}>
                                    <CarIcon iconUrl={i.url}/>
                                </option>
                            )}
                        </Select>
                    }
                />
            </td>
            <td>
                <Input {...register('imei')} errorMessage={errors.car_name?.message} placeholder={'IMEI'}/>
            </td>
            <td>
                <Input {...register('alter_imei')} errorMessage={errors.alter_imei?.message}
                       placeholder={'IMEI-2'}/>
            </td>
        </TableRow>
    );
};

export default CarForm;