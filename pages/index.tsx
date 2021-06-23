import * as React from 'react';
import Head from '../components/templates/head'
import Navigation from '../components/templates/navigation'

const Index: React.FC = () => {
  return (
    <div>
      <Head title="Index page" />
      <Navigation />
      <p>Index Page</p>
    </div>
  )
}

export default Index
