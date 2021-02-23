import React from "react"
import { Redirect } from "react-router-dom"

export const HandelLoginLogout = (userIsLoggedIn:string | null ,sessionManager: ()=>void) => {
    if (userIsLoggedIn === "true") {        
        sessionManager();
    }
}