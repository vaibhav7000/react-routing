import { Routes, Route, Outlet, useParams } from "react-router";
import { Home } from "../Components/Home";
import { About } from "../Components/About";
import { MarketingLayout, MarketingRobouts, MarketingGagets } from "../Components/MarketingLayout";
import { Project, ProjectLayout, SpecificProject } from "../Components/Project";

export default function AppRoutes() {


    return (
        <Routes>
            {/* Normal Routes defining */}
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About/>} />

            {/* Defining nested routing type - 1  with parent no path but creates layout*/}
            <Route element={<MarketingLayout/>}>
                <Route path="/marketing-robots" element={<MarketingRobouts/>} />
                <Route path="/marketing-gadgets" element={<MarketingGagets/>} />
            </Route>

            {/* Defining nested routes type -2 Parent has path */}
            <Route path="/projects">
                {/* This will be the path for /projects linked using index keyword */}
                <Route index element={<Project/>}/> 

                <Route element={<ProjectLayout/>}>
                    <Route path=":pid" element={<SpecificProject/>} />
                </Route>
            </Route>

            {/* Defining nested routes type 3 - parent with both path and element */}
            <Route path="food" element={<RootFoodWrapper/>}>
                <Route index element={<FoodCart/>} />

                <Route path=":foodItem" element={<SingleFood/>} />

            </Route>

        </Routes>
    )
}

// we can declare a single route with no path but it does not contains any nesting routes
// when declaring nested-routes either parent has the path -> type 2 ( in this case it should has default child as element ), eor it has element that will predent as the Layout



function RootFoodWrapper() {

    return (
        <div style={{
            padding: 40, backgroundColor: "", boxShadow: "0px 0px 5px 10px rgb(247, 247, 247)"
        }}>
            <div>
                FoodWrapper
            </div>
            <Outlet/>
        </div>
    )
}

function FoodCart() {

    return (
        <>
            Food-Cart
        </>
    )
}

function SingleFood() {
    const { foodItem } = useParams();

    return (
        <>
            FoodItem is : {foodItem}
        </>
    )
}