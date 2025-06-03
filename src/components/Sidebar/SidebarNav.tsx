import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageSquare,
  Clapperboard, // Using Clapperboard for Watch
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  UserCog, // For Friend Lists or similar specific user lists
  HeartHandshake,
  ChevronDown,
  PlusCircle,
  Briefcase, // Generic for Ad/Business related
  ScrollText // Generic for Page
} from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
  count?: number;
}

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/150?u=olennamason',
  };

  const mainNavItems: NavItem[] = [
    { label: 'News Feed', icon: Newspaper, href: '#', isActive: true },
    { label: 'Messenger', icon: MessageSquare, href: '#' },
    { label: 'Watch', icon: Clapperboard, href: '#', count: 8 },
    { label: 'Marketplace', icon: Store, href: '#' },
  ];

  const shortcuts: NavItem[] = [
    { label: 'FarmVille 2', icon: Gamepad2, href: '#' },
  ];

  const exploreItems: NavItem[] = [
    { label: 'Events', icon: CalendarDays, href: '#', count: 12 },
    { label: 'Pages', icon: Flag, href: '#' },
    { label: 'Groups', icon: Users, href: '#' },
    { label: 'Friend Lists', icon: UserCog, href: '#' },
    { label: 'Fundraisers', icon: HeartHandshake, href: '#' },
  ];

  const createItems = [
    { label: 'Ad', href: '#' },
    { label: 'Page', href: '#' },
    { label: 'Group', href: '#' },
    { label: 'Event', href: '#' },
    { label: 'Fundraiser', href: '#' },
  ];

  const NavLink: React.FC<NavItem & {isSmall?: boolean}> = ({ label, icon: Icon, href, isActive, count, isSmall }) => (
    <Button
      variant="ghost"
      className={cn(
        'w-full justify-start text-sm font-normal py-2 px-3 h-auto',
        isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90' : 'text-sidebar-foreground hover:bg-sidebar-primary/20 hover:text-sidebar-foreground',
        isSmall && 'text-xs'
      )}
      asChild
    >
      <a href={href}>
        <Icon className={cn('mr-3 h-5 w-5', isActive ? 'text-primary' : 'text-sidebar-foreground/80')} />
        {label}
        {count && (
          <span className={cn('ml-auto text-xs px-1.5 py-0.5 rounded-sm', isActive ? 'bg-primary text-primary-foreground' : 'bg-sidebar-primary/50 text-sidebar-foreground')}>
            {count}
          </span>
        )}
      </a>
    </Button>
  );

  return (
    <div className={cn('flex flex-col h-full bg-sidebar text-sidebar-foreground p-4 space-y-4 overflow-y-auto', className)}>
      {/* User Profile */}
      <div className="flex items-center space-x-3 px-3 py-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.substring(0, 1).toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="font-medium text-sm">{user.name}</span>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-1">
        {mainNavItems.map((item) => <NavLink key={item.label} {...item} />)}
      </nav>

      <Separator className="bg-sidebar-border/50" />

      {/* Shortcuts */}
      <div>
        <h3 className="px-3 py-2 text-xs font-semibold uppercase text-sidebar-foreground/70">Shortcuts</h3>
        <nav className="space-y-1">
          {shortcuts.map((item) => <NavLink key={item.label} {...item} />)}
        </nav>
      </div>

      <Separator className="bg-sidebar-border/50" />

      {/* Explore */}
      <div>
        <h3 className="px-3 py-2 text-xs font-semibold uppercase text-sidebar-foreground/70">Explore</h3>
        <nav className="space-y-1">
          {exploreItems.map((item) => <NavLink key={item.label} {...item} />)}
          <Button variant="ghost" className="w-full justify-start text-sm font-normal py-2 px-3 h-auto text-sidebar-foreground hover:bg-sidebar-primary/20 hover:text-sidebar-foreground">
            <ChevronDown className="mr-3 h-5 w-5 text-sidebar-foreground/80" />
            See More...
          </Button>
        </nav>
      </div>

      <Separator className="bg-sidebar-border/50" />

      {/* Create */}
      <div>
        <h3 className="px-3 py-2 text-xs font-semibold uppercase text-sidebar-foreground/70">Create</h3>
        <div className="px-3 text-xs text-sidebar-foreground/90 space-x-1.5">
          {createItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <a href={item.href} className="hover:underline">{item.label}</a>
              {index < createItems.length - 1 && <span>·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer Links - Example */}
      {/* <div className="mt-auto p-3 text-xs text-sidebar-foreground/60 space-x-2">
        <a href="#" className="hover:underline">Privacy</a>
        <span>·</span>
        <a href="#" className="hover:underline">Terms</a>
        <span>·</span>
        <a href="#" className="hover:underline">Cookies</a>
      </div> */}
    </div>
  );
};

export default SidebarNav;
