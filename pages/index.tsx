import React from 'react'
import Layout from '../components/Layout/Layout'
import SideBar from '../components/Layout/SideBar'

const Home = () => {
  return (
    <Layout>
      <SideBar />
      <h1>Hello, Let's build Admin</h1>
    </Layout>
  )
}

export const getServerSideProps = () => {
  return {
    props: {
      
    }
  }
}

export default Home