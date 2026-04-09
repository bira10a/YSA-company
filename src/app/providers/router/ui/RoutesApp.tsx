import { Routes, Route } from "react-router";
import { Layout } from "../../../Layout";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";

const RoutesApp = () => {
  return (

      <Routes>
          <Route path="/" element={<Layout />}>

            {Object.values(routeConfig).map(({element, path}) => (
              <Route 
                key={path}
                path={path}
                element={element}
              />
            ))}
            
          </Route>
      </Routes>

  )
} 
export {RoutesApp};