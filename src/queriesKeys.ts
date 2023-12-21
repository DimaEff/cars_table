export const QUERIES_KEYS = {
    GET_SETTINGS: 'GET_SETTINGS',
    CREATE_CAR: 'CREATE_CAR',
    DELETE_CAR: (carId: string) => `DELETE_CAR_${carId}`,
    DELETE_POINT: (pointId: string) => `DELETE_POINT_${pointId}`,
    DELETE_EVENT: (eventId: string) => `DELETE_EVENT_${eventId}`,
    DELETE_USER: (user_id: string) => `DELETE_EVENT_${user_id}`
}