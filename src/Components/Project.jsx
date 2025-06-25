import { useParams, Outlet } from "react-router"

export function Project() {

    return (
        <div>
            projects
        </div>
    )
}

export function ProjectLayout() {

    return (
        <div>
            <Outlet/>
        </div>
    )
}

export function SpecificProject() {

    const { pid } = useParams();
    return (
        <>
            PID = {pid}
        </>
    )
}