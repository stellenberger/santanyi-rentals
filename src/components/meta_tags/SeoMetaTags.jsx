import React from 'react'
import MetaTags from 'react-meta-tags';

export default function SeoMetaTags({ title, description, ogTitle}) {
  return (
    <div>
      <MetaTags>
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <meta name="og:title" content={ ogTitle } />
      </MetaTags>
    </div>
  )
}
