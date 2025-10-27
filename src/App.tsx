
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Salas from './pages/Salas'
import GradeHoraria from './pages/GradeHoraria'

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { 
            background: '#363636', 
            color: '#fff',
            borderRadius: '8px'
          },
          success: { 
            style: { 
              background: '#10b981',
              color: '#fff'
            } 
          },
          error: { 
            style: { 
              background: '#ef4444',
              color: '#fff'
            } 
          }
        }}
      />
      
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/salas" element={<Salas />} />
            <Route path="/disciplinas" element={<Dashboard />} />
            <Route path="/turmas" element={<Dashboard />} />
            <Route path="/grade" element={<GradeHoraria />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
