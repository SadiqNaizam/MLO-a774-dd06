import React from 'react';
import { CreatePost } from './CreatePost';
import { PostCard, PostProps } from './PostCard';

const PostFeed: React.FC = () => {
  const postsData: PostProps[] = [
    {
      id: '1',
      user: {
        name: 'Julia Fillory',
        avatarUrl: 'https://i.pravatar.cc/150?u=juliafillory',
        location: 'Raleigh, North Carolina',
      },
      timeAgo: '2 hrs',
      content: 'Checking out some new stores downtown!',
      mediaType: 'map' as const,
      mediaUrl: 'https://via.placeholder.com/600x400.png?text=Map+of+Raleigh',
      checkIn: {
        place: 'Raleigh, North Carolina',
        type: 'City - United States',
      },
      taggedUsers: ['Bryan Durand', '2 others'],
      interactions: {
        likes: 120,
        comments: 15,
        shares: 8,
      },
    },
    {
      id: '2',
      user: {
        name: 'Olenna Mason',
        avatarUrl: 'https://i.pravatar.cc/150?u=olennamason',
      },
      timeAgo: '5 hrs',
      content: 'Had a great time at the beach today! 🏖️'
        + 'The weather was perfect and the waves were amazing. Highly recommend a visit if you get the chance. ' 
        + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      mediaType: 'image' as const,
      mediaUrl: 'https://via.placeholder.com/600x400.png?text=Beach+Photo',
      interactions: {
        likes: 256,
        comments: 32,
        shares: 12,
      },
    },
    {
      id: '3',
      user: {
        name: 'Alex Johnson',
        avatarUrl: 'https://i.pravatar.cc/150?u=alexjohnson',
      },
      timeAgo: '1 day',
      content: 'Just finished a new painting. What do you all think? #art #painting',
      mediaType: 'image' as const,
      mediaUrl: 'https://via.placeholder.com/600x400.png?text=Artwork',
      interactions: {
        likes: 512,
        comments: 64,
        shares: 20,
      },
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <CreatePost currentUserAvatarUrl="https://i.pravatar.cc/150?u=olennamason" currentUserName="Olenna" />
      {postsData.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostFeed;
