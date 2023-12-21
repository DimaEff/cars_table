import * as z from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "../Input";
import {FC, useCallback, useMemo} from "react";
import {IconDto} from "../../api/models/IconDto.ts";
import CarIcon from "./CarIcon.tsx";
import {TableRow} from "../Table";
import {IconButton} from "../Button";
import checkIcon from '../../assets/checkIcon.svg'
import Select from "react-select";
import {css} from "@emotion/css";

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

    const options = useMemo(() => icons.map(i => ({
        value: i.url,
        label: <div className={css`padding-left: 32px`}><CarIcon iconUrl={i.url} size={16}/></div>
    })), [])
    const getSelectValue = useCallback((value: string) => options.find(o => o.value === value), [options])

    return (
        <TableRow leftActionSlot={<IconButton onClick={handleSubmit(handleCreateCar)}><img
            src={checkIcon}/></IconButton>} withoutDivider>
            <td>
                <Input {...register('car_name')} errorMessage={errors.car_name?.message} placeholder={'Название'}/>
            </td>
            <td>
                <Controller
                    control={control}
                    name={'icon'}
                    render={
                        ({field, fieldState: {error}}) => <Select className={css`
                            width: 150px;
                        `} ref={field.ref} value={getSelectValue(field.value) ?? null}
                                                                  onChange={o => field.onChange(o?.value)}
                                                                  options={options}/>
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