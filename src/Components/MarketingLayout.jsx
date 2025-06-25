import { Outlet } from "react-router"

export function MarketingLayout() {

    return (
        <div className="marketing-layout" style={{
            padding: 40, border: "1px solid rgb(215, 212, 212)", boxShadow: "0px 0px 5px 10px rgb(215, 212, 212)"
        }}>
            <Outlet />
        </div>
    )
}

export function MarketingRobouts() {

    return (
        <>
            Marketing-robots
        </>
    )
}

export function MarketingGagets() {

    return (
        <>
            Marketing-Gagets
        </>
    )
}