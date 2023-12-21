import {ResOrZero} from "./ResOrZero.ts";
import {CompanyDto} from "./CompanyDto.ts";
import {CarDto} from "./CarDto.ts";
import {PointDto} from "./PointDto.ts";
import {EventDto} from "./EventDto.ts";
import {IconDto} from "./IconDto.ts";

export interface SettingsDto {
    company: ResOrZero<CompanyDto>
    cars: ResOrZero<CarDto[]>
    points: ResOrZero<PointDto[]>
    events: ResOrZero<EventDto[]>
    type_of_events: string[]
    icons: IconDto[]
}