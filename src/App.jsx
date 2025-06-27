import AppRoutes from "./Routes/Routes"
import { Todos } from "./Components/todo"
import { createContext, useState } from "react"
export default function App() {


  return (
    <>
      <AppRoutes/>
    </>
  )
}


// using React-router to enable routing / navigation to different pages without causing a hard reload / fetching the pages from the server. updating the routes of the browser + updating the component inside the root element dynamically using the JS code that fetched from the server once. -> called "client-side-routing"


const UserContext = createContext();

function UserProvider({children}) {
  const [username, setUsername] = useState("JS");

  <UserContext.Provider>
    {children}
  </UserContext.Provider>
}

export function AppMain() {
  console.log("appmain")
  const [todos, setTodos] = useState([{
    title: "Hello"
  }, {
    title: "Bello"
  }])
  return (
    <>
      <Todos todos={todos} setTodos={setTodos} />
    </>
  )
}

// "Prop-drilling" -> Passing the state-variables / functions as props to the Child Components is called prop-drilling, but prop-drilling makes the code "complex" because we have to pass data "deep" to the multiple-components that need data even though the the middle components that does not need that still have to pass the data. THis passing of props from the Parent to the deepest child is a problem because it makes the data available to other components that does not need them, only have to pipe the data. it not about re-rendering of the components, it make the code unclean and complex.

// The above problem is solved by 3 ways 1. ContextApi (default provided by react) 2. Global state-container 3. Recoil

// 1. ContextApi -> provides a way to teleport the state_variables / functions direclty to the child that need it without passing as props

// "steps to deal with ContextAPI"  -> 1. createContext 2. create a "Provider-Wrapper" that will handle the state-variables + will render children 3. wrap the parent inside the provider-wrapper so that all the children of it can use it without passing as props

// ONLY those state-variables should be present inside Provider-Wrapper that are used by many components

// Never make state-variables inside the child components from the parent component state-variables data becaue if the parent state-variable changes it will cause the parent + child that uses the state_variable but does not cause the child component state_variable to get updated