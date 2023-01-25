import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "redux/selectors";
function WithAuthDirect(Component, navigateTo) { 
const ProtectedComponent = (props) => {
    const userData = useSelector(selectUser);
    return userData !== null ? <Component {...props}/> : <Navigate to={navigateTo}/>
}
    return ProtectedComponent

}

export default WithAuthDirect