'use client'
import { useState } from "react";

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [logInError, setLogInError] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        const data = { user: userName, pw: password }
        const res = await fetch("/api/auth", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        const incdata = await res.json()
        const status = res.status;
        if (status == 200) {
            setIsLoggedIn(true);
            setLogInError(false);
        } else {
            setLogInError(true);
            setIsLoggedIn(false);
        }

    }



    return (
        <>
            {logInError && <div> Wrong password or username</div>}
            {!isLoggedIn &&
                <form onSubmit={handleSubmit} className="flex w-full min-h-screen flex-col items-center p-24 shadow-md shadow-white" >
                    <div className="flex flex-col w-1/2 rounded bg-slate-600">
                        <label>Username</label>
                        <input
                            className="rounded text-black"
                            type="text"
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            className="rounded text-black"
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <button type="submit"> Login</button>
                </form>}
            {isLoggedIn && <div>Welcome to the app</div>}
        </>
    );
}