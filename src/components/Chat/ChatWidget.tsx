import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Pencil, Users, Settings2, Search, Circle } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
  lastMessage?: string;
  unreadCount?: number;
}

interface ChatWidgetProps {
  className?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const contactsData: Contact[] = [
    { id: '1', name: 'Alice Wonderland', avatarUrl: 'https://i.pravatar.cc/150?u=alice', isOnline: true, lastMessage: 'See you tomorrow!', unreadCount: 2 },
    { id: '2', name: 'Bob The Builder', avatarUrl: 'https://i.pravatar.cc/150?u=bob', isOnline: false, lastMessage: 'Can we fix it?' },
    { id: '3', name: 'Charlie Chaplin', avatarUrl: 'https://i.pravatar.cc/150?u=charlie', isOnline: true, lastMessage: 'A day without laughter is a day wasted.' },
    { id: '4', name: 'Diana Prince', avatarUrl: 'https://i.pravatar.cc/150?u=diana', isOnline: true, lastMessage: 'On my way.' },
    { id: '5', name: 'Edward Scissorhands', avatarUrl: 'https://i.pravatar.cc/150?u=edward', isOnline: false, lastMessage: 'I am not complete.' },
    { id: '6', name: 'Fiona Gallagher', avatarUrl: 'https://i.pravatar.cc/150?u=fiona', isOnline: true, unreadCount: 1 },
  ];

  const filteredContacts = contactsData.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={cn('bg-card shadow-sm rounded-t-lg h-[400px] flex flex-col', className)}>
      <div className="flex items-center justify-between p-3 border-b border-border">
        <h3 className="font-semibold text-md text-primary-text">Chat</h3>
        <div className="flex space-x-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-secondary-foreground">
            <Pencil className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-secondary-foreground">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-secondary-foreground">
            <Settings2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-3 border-b border-border">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-foreground" />
          <Input
            type="search"
            placeholder="Search contacts..."
            className="pl-8 h-9 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-1.5">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <Button
                key={contact.id}
                variant="ghost"
                className="w-full h-auto justify-start py-2 px-2 space-x-3 rounded-md hover:bg-muted"
              >
                <div className="relative">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                    <AvatarFallback>{contact.name.substring(0, 1).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  {contact.isOnline && (
                    <Circle className="absolute bottom-0 right-0 h-2.5 w-2.5 fill-green-500 stroke-green-500 text-green-500 border-2 border-card rounded-full" />
                  )}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-primary-text truncate">{contact.name}</p>
                  {contact.lastMessage && (
                    <p className={cn('text-xs truncate', contact.unreadCount ? 'text-primary-text font-semibold' : 'text-secondary-foreground')}>
                      {contact.lastMessage}
                    </p>
                  )}
                </div>
                {contact.unreadCount && (
                  <span className="text-xs bg-primary text-primary-foreground font-semibold rounded-full px-1.5 py-0.5 ml-auto">
                    {contact.unreadCount}
                  </span>
                )}
              </Button>
            ))
          ) : (
            <p className="text-sm text-secondary-foreground text-center py-4">No contacts found.</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatWidget;
