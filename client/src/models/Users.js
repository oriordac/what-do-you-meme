import myFetch from "./myFetch";

const Users = [
    { Name: 'Moshe', Password: '2020', Email: 'plotkinm@newpaltz.edu'},
    { Name: 'Bracha', Password: '5780', Email: 'chabad@newpaltz.edu'}
];

export let CurrentUser = null;

export async function Login(email, password) {
    const user = await myFetch('/users/login', { email, password });
    return CurrentUser = user;
}