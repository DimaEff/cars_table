export const QUERIES_KEYS = {
    GET_SETTINGS: 'GET_SETTINGS',
    CREATE_CAR: 'CREATE_CAR',
    DELETE_CAR: (carId: string) => `DELETE_CAR_${carId}`,
    DELETE_POINT: (carId: string) => `DELETE_POINT_${carId}`
}