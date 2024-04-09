import React from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function Home() {
    const appName = `RND React APP`
    const version = process.env.REACT_APP_VERSION

  return (
    <>
      <Header appName={appName}/>
      <Content/>
      <Footer version={version}/>
    </>
  )
}
