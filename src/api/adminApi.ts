import axios from "axios";
import {SettingsDto} from "./models/SettingsDto.ts";

const adminInstance = axios.create({
    baseURL: 'https://gpson.ru/api/gpsapi.php',
    auth: {
        username: 'test',
        password: '123',
    }
})
adminInstance.interceptors.response.use((d) => d, (e) => {
    console.error(e)
})

export const getSettings = async () => (await adminInstance.get<SettingsDto>('/get_settings')).data

export interface CreateCompanyDto {
    company_name: string
}

export const saveCompanyName = async (dto: CreateCompanyDto) => (await adminInstance.post('/save_company_name', null, {params: dto})).data

export const refreshBalance = async () => (await adminInstance.get('/refresh_balance')).data

export const deleteShortLink = async () => (await adminInstance.delete('/delete_short_link')).data

export const refreshShortLink = async () => (await adminInstance.post('/refresh_short_link')).data

export const createShortLink = async () => (await adminInstance.post('/create_short_link')).data

export const deleteCar = async (car_id: string) => (await adminInstance.delete('/delete_car', {params: {car_id}})).data

export interface CreateCarDto {
    car_name: string
    icon: string
    imei: string
    alter_imei?: string
}

export const createCar = async (createCarDto: CreateCarDto) => (await adminInstance.post('/create_car', null, {params: createCarDto})).data

export type SaveCarDto = CreateCarDto & { car_id: string }
export const saveCar = async (saveCarDto: SaveCarDto) => (await adminInstance.post('/save_car', null, {params: saveCarDto})).data

export const deletePoint = async (point_id: string) => (await adminInstance.delete('/delete_point', {params: {point_id}})).data

interface CreatePointDto {
    point_name: string
    address: string
    lat: string
    lng: string
    radius: string
}

export const createPoint = async (createPointDto: CreatePointDto) => (await adminInstance.post('/create_point', null, {params: createPointDto})).data


export type SavePointDto = CreatePointDto & { point_id: string }
export const savePoint = async (savePointDto: SavePointDto) => (await adminInstance.post('/create_point', null, {params: savePointDto})).data

export const deleteEvent = async (event_id: string) => (await adminInstance.delete('/delete_event', {params: {event_id}}))

interface CreateEventDto {
    car_id: string
    user_id: string
    event: 'IN' | 'OUT'
    time_response_sec: number
}

export const createEvent = async (createEventDto: CreateEventDto) => (await adminInstance.post('/create_event', null, {params: createEventDto})).data

export type SaveEventDto = CreateEventDto & { event_id: string }
export const saveEvent = async (saveEventDto: SaveEventDto) => (await adminInstance.post('/save_event', null, {params: saveEventDto})).data
