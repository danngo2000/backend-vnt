import React from 'react'
import Layout from '../components/Layout/Layout'
import SideBar from '../components/Layout/SideBar'

const dropship = () => {
  return (
    <Layout>
      <SideBar fill='dropship' />
      <h1>Dropship</h1>
    </Layout>
  )
}

export const getServerSideProps = () => {
  return {
    props: {}
  }
}

export default dropship
