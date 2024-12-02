import { LOCAL_DEV as baseUrl } from './base-url'
import { getToken } from './getDecodeUser'

export async function POST(endpoint: string, body: any) {
    const config = getRequestConfiguration()

    // if (body instanceof FormData)
    //     config.headers['Content-type'] = "multipart/form-data"

    await fetch(`${baseUrl}/${endpoint}`, { method: 'POST', body }).then((data) => { return data })
}

export async function PUT(endpoint: string, body: any) {
    const config = getRequestConfiguration()

    await fetch(`${baseUrl}/${endpoint}`, { method: 'PUT', body }).then((data) => { return data })
}

export async function GET(endpoint: string) {
    // const config = getRequestConfiguration()
    console.log('api-req')
    await fetch(`${baseUrl}`, { method: 'GET' })
        .then(response => response.json())
        .then(json => {
            return json.movies;
        })
        .catch(error => {
            console.error(error);
        });
}

export async function PATCH(endpoint: string, body: any) {
    const config = getRequestConfiguration()

    await fetch(`${baseUrl}/${endpoint}`, { method: 'PATCH', body }).then((data) => { return data })
}

export async function DELETE(endpoint: string) {
    const config = getRequestConfiguration()

    await fetch(`${baseUrl}/${endpoint}`, { method: 'DELETE' }).then((data) => { return data })
}

const getRequestConfiguration = () => {
    const tokenAccess = getToken()

    const token = tokenAccess ? tokenAccess : null
    const headers = token ? { Authorization: `Bearer ${tokenAccess}`, 'Content-type': "application/json" } : { Authorization: null, 'Content-type': "application/json" }

    return {
        headers
    }
}