import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Image as ImageIcon,
  UserTag,
  ListOrdered,
  MoreHorizontal,
  Video,
  Edit3,
  Camera
} from 'lucide-react';

interface CreatePostProps {
  className?: string;
  currentUserAvatarUrl: string;
  currentUserName: string;
}

export const CreatePost: React.FC<CreatePostProps> = ({ className, currentUserAvatarUrl, currentUserName }) => {
  const [postText, setPostText] = React.useState<string>('');

  const actionButtons = [
    { label: 'Photo/Video', icon: ImageIcon, color: 'text-green-500' },
    { label: 'Tag Friends', icon: UserTag, color: 'text-blue-500' },
    { label: 'Feeling/Activity', icon: ListOrdered, color: 'text-yellow-500' }, // Using ListOrdered as a proxy
  ];

  const tabActions = [
    { label: 'Make Post', icon: Edit3 },
    { label: 'Photo/Video Album', icon: Camera },
    { label: 'Live Video', icon: Video },
  ];

  return (
    <Card className={cn('bg-card p-0', className)}>
      <div className="px-4 pt-4">
        <div className="flex space-x-2 mb-3 border-b border-border pb-3">
          {tabActions.map((action, index) => (
            <Button variant="ghost" key={index} className={`text-sm text-secondary-foreground hover:bg-muted ${index === 0 ? 'text-primary font-semibold border-b-2 border-primary rounded-none' : ''}`}>
              <action.icon className="mr-2 h-5 w-5" />
              {action.label}
            </Button>
          ))}
        </div>
        <div className="flex items-start space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={currentUserAvatarUrl} alt={currentUserName} />
            <AvatarFallback>{currentUserName.substring(0, 1).toUpperCase()}</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder={`What's on your mind, ${currentUserName}?`}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="flex-1 resize-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[60px] text-base p-0"
          />
        </div>
      </div>
      <Separator className="my-3" />
      <div className="px-4 pb-3 flex justify-between items-center">
        <div className="flex space-x-1 sm:space-x-2">
          {actionButtons.map((action) => (
            <Button variant="ghost" key={action.label} className="text-secondary-foreground hover:bg-muted px-2 sm:px-3 py-2 text-xs sm:text-sm">
              <action.icon className={cn('mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5', action.color)} />
              {action.label}
            </Button>
          ))}
        </div>
        <Button variant="ghost" className="text-secondary-foreground hover:bg-muted px-2 sm:px-3 py-2">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
      {/* Example Post Button - usually this would be active if postText is not empty */}
      {/* <div className="px-4 pb-4">
        <Button className="w-full" disabled={!postText.trim()}>
          Post
        </Button>
      </div> */}
    </Card>
  );
};

// Minimal Card component if not using Shadcn's full Card, or if Card is implicitly available via global styles
// For this exercise, assuming Shadcn Card is available.
// If Card is used, import it: import { Card } from '@/components/ui/card';
// As Card is used above, ensuring its import is not forgotten:
import { Card } from '@/components/ui/card';
