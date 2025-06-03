import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Users } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  members: number;
  imageUrl: string;
  memberAvatars: string[];
}

interface SuggestedGroupsProps {
  className?: string;
}

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  const groupsData: Group[] = [
    {
      id: '1',
      name: 'Mad Men (MADdicts)',
      members: 6195,
      imageUrl: 'https://via.placeholder.com/300x100.png?text=Mad+Men+Banner',
      memberAvatars: [
        'https://i.pravatar.cc/150?u=member1',
        'https://i.pravatar.cc/150?u=member2',
        'https://i.pravatar.cc/150?u=member3',
        'https://i.pravatar.cc/150?u=member4',
        'https://i.pravatar.cc/150?u=member5',
      ],
    },
    {
      id: '2',
      name: 'Dexter Morgan Fans', 
      members: 6984,
      imageUrl: 'https://via.placeholder.com/300x100.png?text=Dexter+Banner',
      memberAvatars: [
        'https://i.pravatar.cc/150?u=member6',
        'https://i.pravatar.cc/150?u=member7',
        'https://i.pravatar.cc/150?u=member8',
      ],
    },
    {
      id: '3',
      name: 'Tech Innovators Hub',
      members: 12030,
      imageUrl: 'https://via.placeholder.com/300x100.png?text=Tech+Hub',
      memberAvatars: [
        'https://i.pravatar.cc/150?u=member9',
        'https://i.pravatar.cc/150?u=member10',
        'https://i.pravatar.cc/150?u=member11',
        'https://i.pravatar.cc/150?u=member12',
      ],
    },
  ];

  return (
    <Card className={cn('bg-card shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
        <CardTitle className="text-md font-semibold text-primary-text">Suggested Groups</CardTitle>
        <Button variant="link" className="p-0 h-auto text-xs text-accent-blue hover:text-primary">See All</Button>
      </CardHeader>
      <CardContent className="p-4 pt-2 space-y-4">
        {groupsData.map((group) => (
          <div key={group.id} className="space-y-2 pb-2 last:pb-0 border-b border-border last:border-b-0">
            <div className="relative h-20 w-full rounded-md overflow-hidden bg-muted">
              <img src={group.imageUrl} alt={group.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-2 right-2 flex -space-x-2 overflow-hidden">
                {group.memberAvatars.slice(0, 5).map((avatarUrl, idx) => (
                   <Avatar key={idx} className="inline-block h-6 w-6 rounded-full ring-2 ring-card">
                     <AvatarImage src={avatarUrl} />
                     <AvatarFallback>{idx}</AvatarFallback>
                   </Avatar>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm text-primary-text hover:underline cursor-pointer">{group.name}</p>
              <p className="text-xs text-secondary-foreground">{group.members.toLocaleString()} members</p>
            </div>
            <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100 text-sm">
              <Plus className="mr-2 h-4 w-4" /> Join
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SuggestedGroups;
