import EditarProducto from "../components/EditarProducto";
import NuevoProducto from "../components/NuevoProducto";
import Productos from "../components/Productos";


const routes = [
 
  {
    path: "/",
    element: <Productos />,
  },
  {
    path: "/productos/nuevo",
    element: <NuevoProducto />,
  },
  {
    path: "/productos/editar/:is",
    element: <EditarProducto />,
  },
 
];

export default routes;