import {ResOrZero} from "./ResOrZero.ts";
import {CompanyDto} from "./CompanyDto.ts";
import {CarDto} from "./CarDto.ts";
import {PointDto} from "./PointDto.ts";
import {EventDto} from "./EventDto.ts";

export interface SettingsDto {
    company: ResOrZero<CompanyDto>
    cars: ResOrZero<CarDto[]>
    point: ResOrZero<PointDto[]>
    events: ResOrZero<EventDto[]>
}