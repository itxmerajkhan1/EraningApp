import { 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Settings,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Navigation } from './Navigation';

interface EarningsPageProps {
  onNavigate: (page: 'home' | 'tasks' | 'earnings' | 'wallet' | 'profile' | 'withdraw') => void;
}

export function EarningsPage({ onNavigate }: EarningsPageProps) {
  const earningsSummary = {
    total: 1247.50,
    today: 9.00,
    thisWeek: 87.50,
    thisMonth: 382.00,
    lastMonth: 456.00,
    todayChange: 12.5,
    monthChange: 15.3
  };

  const dailyEarnings = [
    { date: 'Feb 4', amount: 9.00, tasks: 3 },
    { date: 'Feb 3', amount: 12.50, tasks: 5 },
    { date: 'Feb 2', amount: 15.00, tasks: 6 },
    { date: 'Feb 1', amount: 8.50, tasks: 4 },
    { date: 'Jan 31', amount: 11.00, tasks: 5 },
    { date: 'Jan 30', amount: 18.50, tasks: 7 },
    { date: 'Jan 29', amount: 13.00, tasks: 5 }
  ];

  const monthlyBreakdown = [
    { month: 'February 2026', amount: 382.00, tasks: 45, change: 15.3 },
    { month: 'January 2026', amount: 456.00, tasks: 58, change: 8.2 },
    { month: 'December 2025', amount: 409.50, tasks: 52, change: -5.1 }
  ];

  const topEarningTasks = [
    { name: 'Product Testing Survey', earned: 48.00, count: 6 },
    { name: 'Referral Bonus', earned: 75.00, count: 15 },
    { name: 'Watch Videos', earned: 35.50, count: 142 },
    { name: 'Shopping Survey', earned: 60.00, count: 12 },
    { name: 'Write Reviews', earned: 28.00, count: 8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation currentPage="earnings" onNavigate={onNavigate} />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10 lg:ml-64">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Earnings</h1>
            <p className="text-sm text-muted-foreground">Track your earnings over time</p>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6 pb-24 lg:pb-8 lg:ml-64 space-y-6">
        {/* Total Earnings Card */}
        <Card className="bg-gradient-to-br from-green-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5" />
              <span className="text-sm opacity-90">Total Earnings</span>
            </div>
            <div className="text-4xl font-bold mb-4">
              ${earningsSummary.total.toFixed(2)}
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>+{earningsSummary.monthChange}% this month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Today</div>
              <div className="text-2xl font-semibold text-green-600">
                ${earningsSummary.today.toFixed(2)}
              </div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <ArrowUpRight className="w-3 h-3" />
                +{earningsSummary.todayChange}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">This Week</div>
              <div className="text-2xl font-semibold text-blue-600">
                ${earningsSummary.thisWeek.toFixed(2)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">7 days</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">This Month</div>
              <div className="text-2xl font-semibold text-purple-600">
                ${earningsSummary.thisMonth.toFixed(2)}
              </div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <ArrowUpRight className="w-3 h-3" />
                +{earningsSummary.monthChange}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Last Month</div>
              <div className="text-2xl font-semibold">
                ${earningsSummary.lastMonth.toFixed(2)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">January</div>
            </CardContent>
          </Card>
        </div>

        {/* Daily Earnings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Daily Earnings (Last 7 Days)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {dailyEarnings.map((day, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <div className="font-medium">{day.date}</div>
                  <div className="text-sm text-muted-foreground">{day.tasks} tasks completed</div>
                </div>
                <div className="text-lg font-semibold text-green-600">
                  +${day.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Monthly Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {monthlyBreakdown.map((month, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold">{month.month}</div>
                    <div className="text-sm text-muted-foreground">{month.tasks} tasks completed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-semibold">${month.amount.toFixed(2)}</div>
                    <div className={`flex items-center gap-1 text-sm ${month.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {month.change >= 0 ? (
                        <><ArrowUpRight className="w-3 h-3" />+{month.change}%</>
                      ) : (
                        <><ArrowDownRight className="w-3 h-3" />{month.change}%</>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Earning Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Top Earning Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topEarningTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{task.name}</div>
                    <div className="text-sm text-muted-foreground">{task.count} completed</div>
                  </div>
                </div>
                <div className="text-lg font-semibold text-green-600">
                  ${task.earned.toFixed(2)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
