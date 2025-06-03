import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Archive, Settings } from 'lucide-react';

interface StoriesModuleProps {
  className?: string;
}

const StoriesModule: React.FC<StoriesModuleProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
        <CardTitle className="text-md font-semibold text-primary-text">Stories</CardTitle>
        <div className="flex space-x-2">
          <Button variant="link" className="p-0 h-auto text-xs text-accent-blue hover:text-primary">
            <Archive className="mr-1 h-4 w-4" /> Archive
          </Button>
          <Button variant="link" className="p-0 h-auto text-xs text-accent-blue hover:text-primary">
            <Settings className="mr-1 h-4 w-4" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex items-center space-x-3 p-3 border border-border rounded-md hover:bg-muted cursor-pointer">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <PlusCircle className="h-7 w-7 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-sm text-primary-text">Add to Your Story</p>
            <p className="text-xs text-secondary-foreground">Share a photo, video or write something</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoriesModule;
