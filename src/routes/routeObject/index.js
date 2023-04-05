import SignIn from "../../pages/auth/signIn/Index"

const AuthRoutes = [

    {
        path: "/",
        element: <SignIn />
    }
]

const routeObject = [
    ...AuthRoutes

]

export default { routeObject }