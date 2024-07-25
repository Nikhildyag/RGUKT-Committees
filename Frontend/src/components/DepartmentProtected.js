import { Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const DepartmentProtected = ({ element: Element, ...rest }) => {
    const token = Cookies.get("Department_jwt_token");
    if (token === undefined || token === null) {
        return <Navigate to="/departmentloginform" />;
    }
    return <Route {...rest} element={<Element />} />;
};

export default DepartmentProtected;
