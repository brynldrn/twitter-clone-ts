import React from 'react';
import { TweetType } from '../../context/types';
import PlainTweet from './PlainTweet';

const Tweet = ({ type = TweetType.Plain }) => {
  return <PlainTweet />
}

export default Tweet