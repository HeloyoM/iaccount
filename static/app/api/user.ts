import { GET, POST, PUT } from "./api-req"
import { LOCAL_DEV as baseUrl } from './base-url'
import CreateUserDto from '../dto/createUser.dto'

const API = 'user'

export const register = async (userCredentials: CreateUserDto) => {
    try {
        console.log(`${baseUrl}/${API}`, userCredentials)
        return fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userCredentials.username,
                password: userCredentials.password
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log({ json })
                return json;
            })
            .catch(error => {
                console.log(error);
            });
    } catch (error) {
        throw new Error('')
    }
}
// export const keepalive = () => {
//     return fetch('https://reactnative.dev/movies.json')
//         .then(response => response.json())
//         .then(json => {
//             console.log({ json })
//             return json.movies;
//         })
//         .catch(error => {
//             console.error(error);
//         });
// };
// export const updateUser = async (user: any) => {
//     try {
//         const response = await PUT(API, user)

//         return response
//     } catch (error) {
//         throw new Error('Failed to update user')
//     }
// }

// export const findAllUsers = async () => {
//     try {
//         const response = await GET(API)

//         return response
//     } catch (error) {
//         throw new Error('Failed to fetch categories')
//     }
// }
