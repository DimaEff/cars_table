import axios from "axios";

const adminInstance = axios.create({
    baseURL: 'https://gpson.ru/api/gpsapi.php',
    auth: {
        username: 'test',
        password: '123',
    }
})

export const getSettings = async () => (await adminInstance.get('get_settings')).data