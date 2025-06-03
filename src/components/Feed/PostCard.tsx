import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal, MapPin, Globe } from 'lucide-react';

interface User {
  name: string;
  avatarUrl: string;
  location?: string; 
}

interface CheckIn {
  place: string;
  type: string;
}

interface Interactions {
  likes: number;
  comments: number;
  shares: number;
}

export interface PostProps {
  id: string;
  user: User;
  timeAgo: string;
  content: string;
  mediaType?: 'image' | 'video' | 'map';
  mediaUrl?: string;
  checkIn?: CheckIn;
  taggedUsers?: string[];
  interactions: Interactions;
  className?: string;
}

export const PostCard: React.FC<PostProps> = ({
  user,
  timeAgo,
  content,
  mediaType,
  mediaUrl,
  checkIn,
  taggedUsers,
  interactions,
  className,
}) => {
  return (
    <Card className={cn('bg-card rounded-lg overflow-hidden shadow-sm', className)}>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 1).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm text-primary-text">
                {user.name}
                {user.location && <span className="text-xs text-secondary-foreground font-normal"> is in {user.location}.</span>}
              </p>
              <p className="text-xs text-secondary-foreground">
                {timeAgo} · <Globe className="inline h-3 w-3 mr-0.5" />
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-secondary-foreground w-8 h-8">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-2 pt-0">
        <p className="text-sm text-primary-text mb-3 whitespace-pre-wrap">{content}</p>
        {mediaUrl && (
          <div className="rounded-md overflow-hidden border border-border mb-3 aspect-video bg-muted flex items-center justify-center">
            {/* In a real app, this would be an <img /> or a map component */}
            <img src={mediaUrl} alt="Post media" className="w-full h-full object-cover" />
          </div>
        )}
        {checkIn && (
          <div className="p-3 bg-secondary/30 rounded-md border border-border mb-3">
            <div className="flex items-center">
              <MapPin className="h-10 w-10 text-secondary-foreground mr-3" />
              <div>
                <p className="font-semibold text-sm text-primary-text">{checkIn.place}</p>
                <p className="text-xs text-secondary-foreground">{checkIn.type}</p>
                {taggedUsers && taggedUsers.length > 0 && (
                   <p className="text-xs text-secondary-foreground">
                     {taggedUsers.join(' and ')} {taggedUsers.length > 1 ? 'have' : 'has'} been here
                   </p>
                )}
              </div>
              <Button variant="outline" size="sm" className="ml-auto">Save</Button>
            </div>
          </div>
        )}
      </CardContent>
      <div className="px-4 pb-2">
        <div className="flex justify-between items-center text-xs text-secondary-foreground mb-2">
          <span>{interactions.likes > 0 ? `${interactions.likes} Likes` : ''}</span>
          <div className="space-x-3">
            <span>{interactions.comments > 0 ? `${interactions.comments} Comments` : ''}</span>
            <span>{interactions.shares > 0 ? `${interactions.shares} Shares` : ''}</span>
          </div>
        </div>
        <Separator />
      </div>
      <CardFooter className="p-2 px-4 flex justify-around">
        <Button variant="ghost" className="text-secondary-foreground hover:bg-muted flex-1">
          <ThumbsUp className="mr-2 h-5 w-5" /> Like
        </Button>
        <Button variant="ghost" className="text-secondary-foreground hover:bg-muted flex-1">
          <MessageCircle className="mr-2 h-5 w-5" /> Comment
        </Button>
        <Button variant="ghost" className="text-secondary-foreground hover:bg-muted flex-1">
          <Share2 className="mr-2 h-5 w-5" /> Share
        </Button>
      </CardFooter>
    </Card>
  );
};
