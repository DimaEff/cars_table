export const QUERIES_KEYS = {
    GET_SETTINGS: 'GET_SETTINGS',
    CREATE_CAR: 'CREATE_CAR',
    DELETE_CAR: (carId: string) => `DELETE_CAR_${carId}`
}