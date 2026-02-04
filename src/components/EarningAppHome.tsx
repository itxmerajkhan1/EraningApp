import { 
  DollarSign, 
  TrendingUp, 
  Gift, 
  Users, 
  PlayCircle, 
  ShoppingBag, 
  Star,
  CheckCircle,
  ArrowRight,
  Wallet,
  Trophy,
  Clock
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Navigation } from './Navigation';

interface EarningAppHomeProps {
  onNavigate: (page: 'home' | 'tasks' | 'earnings' | 'wallet' | 'profile' | 'withdraw') => void;
}

export function EarningAppHome({ onNavigate }: EarningAppHomeProps) {
  const stats = [
    { label: 'Total Earned', value: '$1,247.50', icon: DollarSign, color: 'text-green-600' },
    { label: 'This Month', value: '$382.00', icon: TrendingUp, color: 'text-blue-600' },
    { label: 'Referrals', value: '23', icon: Users, color: 'text-purple-600' },
    { label: 'Rank', value: 'Gold', icon: Trophy, color: 'text-amber-600' }
  ];

  const earningMethods = [
    {
      icon: PlayCircle,
      title: 'Watch Videos',
      description: 'Earn up to $0.50 per video',
      reward: '+$0.10',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: ShoppingBag,
      title: 'Shop & Earn',
      description: 'Get cashback on purchases',
      reward: 'Up to 25%',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Users,
      title: 'Refer Friends',
      description: 'Earn $5 per referral',
      reward: '+$5.00',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Gift,
      title: 'Daily Bonus',
      description: 'Claim your daily reward',
      reward: '+$0.25',
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  const availableTasks = [
    {
      title: 'Complete Survey: Shopping Habits',
      reward: '$2.50',
      time: '5 min',
      difficulty: 'Easy'
    },
    {
      title: 'Watch: Product Review Videos',
      reward: '$1.20',
      time: '10 min',
      difficulty: 'Easy'
    },
    {
      title: 'Sign up for Premium Trial',
      reward: '$8.00',
      time: '3 min',
      difficulty: 'Medium'
    },
    {
      title: 'Share on Social Media',
      reward: '$0.75',
      time: '2 min',
      difficulty: 'Easy'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation currentPage="home" onNavigate={onNavigate} />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10 lg:ml-64">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 lg:hidden">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-xl">EarnFlow</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <Button variant="ghost" size="sm">
              <Wallet className="w-4 h-4 mr-2" />
              Withdraw
            </Button>
            <button 
              onClick={() => onNavigate('profile')}
              className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:opacity-90 transition-opacity"
              aria-label="View Profile"
            >
              JD
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 pb-24 lg:pb-8 lg:ml-64 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-8">
          <Badge className="bg-green-100 text-green-700 border-green-200">
            <Star className="w-3 h-3 mr-1" />
            Gold Member
          </Badge>
          <h1 className="text-4xl md:text-5xl">
            Start Earning Today
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete simple tasks, watch videos, and refer friends to earn real money. 
            Cash out anytime via PayPal or gift cards.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center space-y-2">
                <div className="flex justify-center">
                  <div className={`w-12 h-12 rounded-full ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Earning Methods */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2>Ways to Earn</h2>
            <Button variant="ghost" size="sm">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {earningMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    {method.reward}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Tasks */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Available Tasks</CardTitle>
              <Badge variant="outline">{availableTasks.length} tasks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {availableTasks.map((task, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border hover:border-green-200 hover:bg-green-50/50 transition-colors cursor-pointer"
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{task.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {task.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.time}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-600">{task.reward}</div>
                  </div>
                  <Button size="sm">
                    Start
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-green-500 to-blue-500 border-0 text-white">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-white">Invite Friends, Earn More</h2>
            <p className="text-green-50 max-w-xl mx-auto">
              Share your referral code and earn $5 for each friend who joins. 
              Your friends also get a $2 welcome bonus!
            </p>
            <div className="flex items-center justify-center gap-3 pt-4">
              <Button size="lg" variant="secondary">
                <Users className="w-5 h-5 mr-2" />
                Invite Friends
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Share Code
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 py-8">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3>Instant Payouts</h3>
            <p className="text-sm text-muted-foreground">
              Withdraw your earnings anytime via PayPal, bank transfer, or gift cards
            </p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3>Daily Opportunities</h3>
            <p className="text-sm text-muted-foreground">
              New tasks added every day. Never run out of ways to earn
            </p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3>Bonus Rewards</h3>
            <p className="text-sm text-muted-foreground">
              Daily login bonuses, achievement rewards, and special promotions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}