import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  LayoutGrid, // For Logo placeholder
  Search,
  Home,
  Users,       // For "Find Friends" or Friends icon
  MessageSquare,
  Bell,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/150?u=olennamason',
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-[240px] right-[300px] h-[70px] z-10',
        'flex items-center justify-between bg-surface px-6 border-b border-border',
        className
      )}
    >
      {/* Left Section: Logo and Search Bar */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-10 w-10 text-primary hover:bg-primary/10">
          {/* Using LayoutGrid as a placeholder for 'F' logo */}
          <LayoutGrid className="h-7 w-7" /> 
        </Button>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-9 pr-3 py-2 h-10 w-[220px] md:w-[280px] rounded-full bg-background border-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
      </div>

      {/* Right Section: Profile, Navigation, and Action Icons */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Profile and Text Links */}
        <Button variant="ghost" className="flex items-center gap-2 p-1 pr-2 rounded-full hover:bg-muted h-auto">
          <Avatar className="h-7 w-7">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 1).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold text-primary-text hidden sm:inline">{user.name.split(' ')[0]}</span>
        </Button>
        
        <Button variant="ghost" className="text-sm font-semibold text-primary hover:text-primary hover:bg-muted px-2 sm:px-3 h-9">
          Home
        </Button>
        <Button variant="ghost" className="text-sm font-semibold text-primary-text hover:text-primary hover:bg-muted px-2 sm:px-3 h-9">
          Find Friends
        </Button>

        <Separator orientation="vertical" className="h-6 bg-border mx-1 hidden md:block" />

        {/* Icon Buttons */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-primary-text hover:bg-muted relative">
            <Users className="h-5 w-5" />
            {/* Badge for count, e.g., 8 from image */}
            <div className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-tight">8</div> 
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-primary-text hover:bg-muted relative">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-primary-text hover:bg-muted relative">
            <Bell className="h-5 w-5" />
            <div className="absolute top-1 right-1 bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-tight">36</div>
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6 bg-border mx-1 hidden lg:block" />

        {/* More Actions */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-primary-text hover:bg-muted">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-primary-text hover:bg-muted">
            <ChevronDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
