import { createUser, deleteModule, login,  } from '../utils/apiCommands.js';

describe('First test with API commands', () => {
    let moduleId: string;
    let tokenId: string;
    // let userEmail: string;
    // let userName: string;

    afterAll(async () => {
        await deleteModule(moduleId);
    });


     it('Login',async () => {
        const userLogin =
            {
                returnSecureToken: true,
                email: "super.admin@radiumrocket.com",
                password: "Passw0rd1234"
            };
        const responseLogin = await login(userLogin);
        tokenId = responseLogin.data.idToken;
        console.log('token: ', await tokenId);
    });



    it('POST USER',async () => {
        const module = {
            name: "test",
            description: "description",
            publishDate: "2023-06-27T15:00:00.000+00:00",
            topics: [
                "Node JS",
                "React"
            ],
            isActive: "true"
        };
        const response = await createUser(module);
        moduleId = response.data._id;
        console.log('module: ', await moduleId);
    });

    // it('GET USER DATA',async () => {
    //     const userData = await getUserData(userId)
    //     userName = userData.name;
    //     userEmail = userData.email;

    //     console.log('User name', await userName);
    //     console.log('User email', await userEmail);
    // });
});


