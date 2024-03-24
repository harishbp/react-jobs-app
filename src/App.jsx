import { useState } from 'react'
import { Route, BrowserRouter, createRoutesFromElements, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage, {jobLoader} from './pages/EditJobPage'
import { toast } from 'react-toastify';

import './data/server.js'

const addJob = async (newJob) => {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  });
  console.log(res)
  return;
};

const deleteJob = async (id) => {

  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  });
  if(res.ok) toast.success('Job Deleted Successfully');
  return res;
};

 // Update Job
 const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/add' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/edit/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
