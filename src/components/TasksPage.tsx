import { 
  PlayCircle, 
  ShoppingBag, 
  MessageSquare, 
  FileText,
  Users,
  Star,
  Clock,
  DollarSign,
  Settings,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Navigation } from './Navigation';

interface TasksPageProps {
  onNavigate: (page: 'home' | 'tasks' | 'earnings' | 'wallet' | 'profile' | 'withdraw') => void;
}

export function TasksPage({ onNavigate }: TasksPageProps) {
  const tasks = [
    {
      id: 1,
      title: 'Watch 5 Video Ads',
      description: 'Watch short video advertisements',
      reward: '$2.50',
      duration: '10 min',
      category: 'Videos',
      icon: PlayCircle,
      color: 'bg-red-50 text-red-600',
      difficulty: 'Easy'
    },
    {
      id: 2,
      title: 'Complete Shopping Survey',
      description: 'Answer questions about your shopping habits',
      reward: '$5.00',
      duration: '15 min',
      category: 'Surveys',
      icon: ShoppingBag,
      color: 'bg-blue-50 text-blue-600',
      difficulty: 'Medium'
    },
    {
      id: 3,
      title: 'Share on Social Media',
      description: 'Share our app with your friends',
      reward: '$1.00',
      duration: '5 min',
      category: 'Social',
      icon: MessageSquare,
      color: 'bg-green-50 text-green-600',
      difficulty: 'Easy'
    },
    {
      id: 4,
      title: 'Write Product Review',
      description: 'Review a product you recently purchased',
      reward: '$3.50',
      duration: '12 min',
      category: 'Reviews',
      icon: FileText,
      color: 'bg-purple-50 text-purple-600',
      difficulty: 'Easy'
    },
    {
      id: 5,
      title: 'Refer 3 Friends',
      description: 'Invite friends to join EarnFlow',
      reward: '$15.00',
      duration: '20 min',
      category: 'Referral',
      icon: Users,
      color: 'bg-amber-50 text-amber-600',
      difficulty: 'Hard'
    },
    {
      id: 6,
      title: 'Daily Check-in Bonus',
      description: 'Check in daily for bonus rewards',
      reward: '$0.50',
      duration: '1 min',
      category: 'Daily',
      icon: CheckCircle,
      color: 'bg-teal-50 text-teal-600',
      difficulty: 'Easy'
    },
    {
      id: 7,
      title: 'Product Testing Survey',
      description: 'Test new products and provide feedback',
      reward: '$8.00',
      duration: '25 min',
      category: 'Surveys',
      icon: Star,
      color: 'bg-indigo-50 text-indigo-600',
      difficulty: 'Medium'
    },
    {
      id: 8,
      title: 'Watch Tutorial Videos',
      description: 'Learn about new features',
      reward: '$1.50',
      duration: '8 min',
      category: 'Videos',
      icon: PlayCircle,
      color: 'bg-red-50 text-red-600',
      difficulty: 'Easy'
    }
  ];

  const stats = {
    completedToday: 3,
    earnedToday: '$9.00',
    available: tasks.length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation currentPage="tasks" onNavigate={onNavigate} />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10 lg:ml-64">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Available Tasks</h1>
            <p className="text-sm text-muted-foreground">{tasks.length} tasks available</p>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6 pb-24 lg:pb-8 lg:ml-64 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-semibold text-green-600">{stats.completedToday}</div>
              <div className="text-xs text-muted-foreground mt-1">Completed Today</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-semibold text-blue-600">{stats.earnedToday}</div>
              <div className="text-xs text-muted-foreground mt-1">Earned Today</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-semibold text-purple-600">{stats.available}</div>
              <div className="text-xs text-muted-foreground mt-1">Available</div>
            </CardContent>
          </Card>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          <h2 className="font-semibold">All Tasks</h2>
          
          {tasks.map((task) => {
            const Icon = task.icon;
            return (
              <Card key={task.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-xl ${task.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{task.title}</h3>
                          <p className="text-sm text-muted-foreground">{task.description}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-lg font-semibold text-green-600">{task.reward}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between gap-2 mt-3">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {task.duration}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {task.difficulty}
                          </Badge>
                        </div>
                        
                        <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                          Start Task
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
