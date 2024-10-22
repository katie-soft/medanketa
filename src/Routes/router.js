import { useRoutes } from "react-router-dom";
import { AboutUs } from "../pages/AboutUs";
import { AllPages } from "../pages/AllPages";
import { Common } from "../pages/Common";
import { Contact } from "../pages/Contact";
import { CreatePage } from "../pages/CreatePage";
import { Directories } from "../pages/Directories";
import { Faq } from "../pages/FAQ";
import { Logs } from "../pages/Logs";
import { NotFound } from "../pages/NotFound";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { Settings } from "../pages/Settings";
import { Support } from "../pages/Support";
import { Users } from "../pages/Users";
import Questionary from '../pages/Questionary';
import { Layout } from "../layouts";
import { ControlRoles } from "../pages/ControlRole";
import { AddRole } from "../pages/AddRole";
import { EditUser } from "../pages/EditUser";
import CreateDirectories from '../pages/Directories/CreateDirectories';

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Layout/>,  
      children: [
      { index: true, element: <AllPages /> },  
        { path: 'contacts', element: <Contact /> },
        { path: 'about', element: <AboutUs /> },
        { path: 'common', element: <Common /> },
        { path: 'createPage', element: <CreatePage /> },
        { path: 'directories', element: <Directories /> },
        { path: 'create-directory', element: <CreateDirectories /> },
        { path: 'faq', element: <Faq /> },
        { path: 'logs', element: <Logs /> },
        { path: 'privacyPolicy', element: <PrivacyPolicy /> },
        { path: 'questionary', element: <Questionary /> },
        { path: 'settings', element: <Settings /> },
        { path: 'support', element: <Support /> },
        { path: '/editUser', element: <EditUser /> },
        { path: 'users', element: <Users /> },
        {path:"users/control-roles",element:<ControlRoles/>},
        {path:"users/control-roles/add-role",element:<AddRole/>},
        { path: '*', element: <NotFound /> },
      ]
    }
  ]);
  
  return routes;
};

export default AppRoutes;
