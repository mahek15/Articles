import React from 'react'
import articleContent from './ArticleContent'
import Articles from '../components/Articles'

const ArticlesList = () => {
  return (
    <div className='mb-20 max-w-screen-md mx-auto '>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        Articless!
      </h1>
      <div className='container py-4 mx-auto'>
        <div className='flex flex-wrap -m-4'>
            <Articles articles={articleContent}/>
        </div>
      </div>
    </div>
  )
}

export default ArticlesList
