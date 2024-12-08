import React from 'react'
import Header from '@/app/components/header/page'
import Hero from '@/app/components/hero/page'
import TopPicksSection from '@/app/components/product/page'
import Asgaard from '@/app/components/products2/page'
import Blogs from '@/app/components/blogs/page'
import FollowUs from '@/app/components/followUs/page'
import Footer from '@/app/components/footer/page'

const home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <TopPicksSection/>
      <Asgaard/>
      <Blogs/>
      <FollowUs/>
       <Footer/>
    </div>
  )
}

export default home
