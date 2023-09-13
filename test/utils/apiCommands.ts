import axios, { AxiosResponse } from 'axios'

let apiKey = "AIzaSyBU42bIcEBMJnZ6lL5unZLjfhgb2-Ofa6E";
let responseToken: any;
interface Module {
    name: string;
    description: string;
    publishDate: string;
    topics: string[];
    isActive: string;
};

interface Login {
    returnSecureToken: boolean,
    email: string;
    password: string;
};


export async function login(userLogin: Login): Promise<any> {
       responseToken = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, userLogin);

        return responseToken;
};

                      // POST MODULES //

export async function createUser(module: Module): Promise<any>{
    const token = responseToken.data.idToken;

    const response =  await axios.post('http://localhost:4000/course/1e063109a88495b45758c004/module', module,
            { headers: {
                'Token': token,
                }
            });
    const moduleData = response.data;
    return moduleData;
};



//                         // DELETE MODULES//

export async function deleteModule(moduleId: any): Promise<any> {
    const token = responseToken.data.idToken;
    await axios.delete(`http://localhost:4000/course/1e063109a88495b45758c004/module/${moduleId}`,
    {
        headers: {
            'Token': token,
        }
    });
};




    // export async function getUserData(userId: number): Promise<User> {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     return response.data;
// }
