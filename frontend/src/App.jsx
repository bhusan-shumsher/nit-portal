import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './ui/Home';
import Login from './features/student/Login';
import Dashboard from "./features/student/Dashboard";
import AppLayout from "./ui/AppLayout";
import ChangePassword from "./features/student/ChangePassword";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import CurrentSubject from "./features/student/CurrentSubject";
import Result from "./features/student/Results";
import ExamForm from "./features/student/ExamForm";
import FormSuccess from "./features/student/FormSuccess";
import  StaffLogin from "./features/staff/Login";
import AdminDashboard from "./features/staff/AdminDashboard";
import AdminProtectedRoutes from './features/staff/AdminProtectedRoutes'
import ListStudent from "./features/staff/ListStudent";
import StudentDetail from "./features/staff/StudentDetail";
import FeeStatus from "./features/student/FeeStatus";
import AccountDashboard from "./features/staff/account/AccountDashboard";
import AccountProtected from "./features/staff/account/AccountProtected";

import DepartmentDashboard from "./features/staff/department/DepartmentDashboard";
import DepartmentProtectedRoute from "./features/staff/department/DepartmentProtectedRoute";
import StudentList from './features/staff/department/StudentList';
import AddNewStudent from "./features/staff/department/AddStudent";
import AddSchoolInfo from "./features/staff/department/AddSchoolInfo";
import BulkUploadStudent from "./features/staff/department/BulkUploadStudent";
import BulkAcademicInfo from "./features/staff/department/BulkAcademicInfo";
import BulkResultUpload from "./features/staff/department/BulkResultUpload";
import AddResult from "./features/staff/department/AddResult";
import VerifyResult from "./features/staff/department/VerifyResult";
import EditResult from "./features/staff/department/EditResult";
import BackPaperUpload from "./features/staff/department/BackPaperUpload";

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {

    element: <ProtectedRoute><AppLayout/></ProtectedRoute>,
    children: [
      {
        path:'/student/dashboard',
        element: <Dashboard/>
      },
      {
        path:'/student/mock',
        element: <Dashboard/>
      },
      {
        path:'/student/current-subject',
        element: <CurrentSubject/>
      },
      {
        path:'/student/result',
        element: <Result/>
      },
      {
        path:'/student/exam-form',
        element: <ExamForm/>
      },
      {
        path:'/student/form-success',
        element: <FormSuccess/>
      },
      {
        path:'/student/fee-status',
        element: <FeeStatus/>
      }
      
    ]
  }, 
  {
    element: <DepartmentProtectedRoute><AppLayout/></DepartmentProtectedRoute>,
    children:[
      {
        path:'/department/dashboard',
        element: <DepartmentDashboard/>
      },
      {
        path:'/department/student',
        element: <StudentList/>
      },
      {
        path:'/admin/student/details',
        element: <StudentDetail/>
      },
      {
        path:'/department/add-new-student',
        element: <AddNewStudent/>
      },
      {
        path:'/department/add-school-info',
        element:<AddSchoolInfo/>
      },
      {
        path:'/department/bulk-upload-student',
        element: <BulkUploadStudent/>
      },
      {
        path:'/department/bulk-school-info',
        element: <BulkAcademicInfo/>
      },
      {
        path: '/department/bulk-result-upload',
        element: <BulkResultUpload/>
      },
      {
        path:'/department/add-result',
        element: <AddResult/>
      },
      {
        path:'/department/verify-result',
        element:<VerifyResult/>
      },
      {
        path:'/department/edit-result',
        element: <EditResult/>
      },
      {
        path:'department/update-backlogs',
        element: <BackPaperUpload/>
      }
    ]
  },
  {
    element: <AccountProtected><AppLayout/></AccountProtected>,
    children:[
      {
        path:"/account/dashboard",
        element: <AccountDashboard/>
      },
    ]
  },
  {
    element: <AdminProtectedRoutes><AppLayout></AppLayout></AdminProtectedRoutes>,
    children:[
      {
        path: '/admin/dashboard',
        element: <AdminDashboard/>
      },
      {
        path:'/admin/student',
        element: <ListStudent/>
      },
      
    ]
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/student/login',
    element: <Login/>
  },
  {
    path: '/change-password',
    element: <ChangePassword/>
  },
  {
    path:'/staff/login',
    element: <StaffLogin/>
  }
  
]);

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <RouterProvider router={router}/>
        <Toaster 
          position="top-center" 
          gutter={12} 
          containerStyle={{
            margin:'8px'
        }}
        toastOptions={{
          success:{
            duration: 3000,
          },
          error:{
            duration: 5000
          },
          style:{
            fontSize: '16px',
            maxWidth: '500px',
            padding:'16px 24px'
          }
        }}
        />
      </QueryClientProvider>
      );
}

export default App
