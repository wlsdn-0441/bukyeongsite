import {NavLink , Outlet } from "react-router-dom";

//도움말 레이아웃 컴포넌트
export default function HelpLayout() {

    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>
                If you need assistance, please contact our support team.
            </p>

            <NavLink to="/faq">View the FAQ</NavLink>
            <br />
            <NavLink to="/contact">Contact Us</NavLink>

            <Outlet />
        </div>
    );

}

