import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {appRoute} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>



<RouterProvider router={appRoute} />

  </StrictMode>,
)
