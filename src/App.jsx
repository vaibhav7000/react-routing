import AppRoutes from "./Routes/Routes"

export default function App() {


  return (
    <>
      <AppRoutes/>
    </>
  )
}


// using React-router to enable routing / navigation to different pages without causing a hard reload / fetching the pages from the server. updating the routes of the browser + updating the component inside the root element dynamically using the JS code that fetched from the server once. -> called "client-side-routing"