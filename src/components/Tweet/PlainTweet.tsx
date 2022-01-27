import React from 'react';
import TweetToolbar from '../TweetToolbar';

const PlainTweet = () => {
  return (
    <article className='text-sm py-3 grid'>
      <img src="http://placehold.it/46x46" alt="Profile" className='rounded-full w-11' />
      <div>Lorem Ipsum <span>@loremipsum</span> | <span>Jul 7, 2021</span></div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim incidunt officiis alias. Veniam omnis eligendi expedita sapiente soluta, rerum, iure architecto nam eaque eveniet autem, illum voluptas corrupti? Doloremque.
      </div>
      <TweetToolbar />
    </article>
  )
}

export default PlainTweet