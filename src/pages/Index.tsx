import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PostFeed from '../components/Feed/PostFeed';

/**
 * @file Index.tsx
 * @description This is the main page for the Social Media Feed Clone, typically representing the home or feed view.
 * It uses MainAppLayout to provide the overall page structure (header, sidebars) and renders the PostFeed component
 * as the primary content for the main area.
 *
 * The component hierarchy suggests that FeedPage (this component) uses SocialMediaLayout (implemented by MainAppLayout).
 * MainAppLayout is expected to handle the rendering of SidebarNav, TopHeader, and the RightSidebar modules
 * (StoriesModule, SuggestedGroups, ChatWidget), while PostFeed populates the MainContentArea.
 */

const FeedPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* PostFeed is the main content for this page, displaying a stream of posts. */}
      {/* The MainAppLayout handles the surrounding navigation and sidebars. */}
      {/* The PostFeed component itself contains CreatePost and multiple PostCard components. */}
      {/* Dummy data for posts is managed within PostFeed.tsx. */}
      <PostFeed />
    </MainAppLayout>
  );
};

export default FeedPage;
