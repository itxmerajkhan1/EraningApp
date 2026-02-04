import { 
  Wallet,
  DollarSign,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Settings,
  History,
  Lock,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Navigation } from './Navigation';

interface WalletPageProps {
  onNavigate: (page: 'home' | 'tasks' | 'earnings' | 'wallet' | 'profile' | 'withdraw') => void;
}

export function WalletPage({ onNavigate }: WalletPageProps) {
  const walletData = {
    availableBalance: 382.00,
    pendingBalance: 45.50,
    totalEarned: 1247.50,
    totalWithdrawn: 820.00,
    minWithdrawal: 10.00
  };

  const recentTransactions = [
    { 
      id: 1,
      type: 'earning',
      description: 'Watch Videos Task',
      amount: 2.50,
      date: 'Feb 4, 2026',
      time: '2:30 PM',
      status: 'completed'
    },
    { 
      id: 2,
      type: 'earning',
      description: 'Complete Survey',
      amount: 5.00,
      date: 'Feb 3, 2026',
      time: '11:15 AM',
      status: 'completed'
    },
    { 
      id: 3,
      type: 'withdrawal',
      description: 'PayPal Withdrawal',
      amount: -100.00,
      date: 'Feb 1, 2026',
      time: '9:00 AM',
      status: 'completed'
    },
    { 
      id: 4,
      type: 'earning',
      description: 'Referral Bonus',
      amount: 5.00,
      date: 'Jan 31, 2026',
      time: '4:45 PM',
      status: 'completed'
    },
    { 
      id: 5,
      type: 'earning',
      description: 'Daily Check-in',
      amount: 0.50,
      date: 'Jan 30, 2026',
      time: '8:30 AM',
      status: 'completed'
    },
    { 
      id: 6,
      type: 'withdrawal',
      description: 'Bank Transfer',
      amount: -250.00,
      date: 'Jan 28, 2026',
      time: '3:20 PM',
      status: 'completed'
    }
  ];

  const paymentMethods = [
    { 
      id: 1,
      type: 'PayPal',
      email: 'john.doe@paypal.com',
      verified: true,
      primary: true
    },
    { 
      id: 2,
      type: 'Bank Account',
      details: '****6789',
      verified: true,
      primary: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation currentPage="wallet" onNavigate={onNavigate} />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10 lg:ml-64">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">My Wallet</h1>
            <p className="text-sm text-muted-foreground">Manage your earnings and withdrawals</p>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6 pb-24 lg:pb-8 lg:ml-64 space-y-6">
        {/* Available Balance Card */}
        <Card className="bg-gradient-to-br from-green-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-5 h-5" />
              <span className="text-sm opacity-90">Available Balance</span>
            </div>
            <div className="text-4xl font-bold mb-6">
              ${walletData.availableBalance.toFixed(2)}
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={() => onNavigate('withdraw')}
                className="flex-1 bg-white text-green-600 hover:bg-white/90"
                disabled={walletData.availableBalance < walletData.minWithdrawal}
              >
                <ArrowUpRight className="w-4 h-4 mr-2" />
                Withdraw
              </Button>
              <Button 
                variant="outline"
                className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                <History className="w-4 h-4 mr-2" />
                History
              </Button>
            </div>
            {walletData.availableBalance < walletData.minWithdrawal && (
              <p className="text-sm mt-3 opacity-90">
                Minimum withdrawal amount is ${walletData.minWithdrawal.toFixed(2)}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Balance Summary */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-sm text-muted-foreground">Pending</span>
              </div>
              <div className="text-2xl font-semibold">${walletData.pendingBalance.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground mt-1">Processing earnings</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm text-muted-foreground">Total Earned</span>
              </div>
              <div className="text-2xl font-semibold">${walletData.totalEarned.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground mt-1">All time</div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Methods
              </CardTitle>
              <Button variant="outline" size="sm">
                Add New
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {paymentMethods.map((method) => (
              <div 
                key={method.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{method.type}</div>
                    <div className="text-sm text-muted-foreground">
                      {method.email || method.details}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {method.verified && (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  )}
                  {method.primary && (
                    <Badge variant="secondary">Primary</Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="w-5 h-5" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentTransactions.map((transaction, index) => (
              <div key={transaction.id}>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'earning' 
                        ? 'bg-green-100' 
                        : 'bg-blue-100'
                    }`}>
                      {transaction.type === 'earning' ? (
                        <ArrowDownRight className={`w-5 h-5 ${
                          transaction.type === 'earning' 
                            ? 'text-green-600' 
                            : 'text-blue-600'
                        }`} />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{transaction.description}</div>
                      <div className="text-sm text-muted-foreground">
                        {transaction.date} • {transaction.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
                {index < recentTransactions.length - 1 && <Separator />}
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Transactions
            </Button>
          </CardContent>
        </Card>

        {/* Withdrawal Info */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Withdrawal Information</h3>
                <p className="text-sm text-muted-foreground">
                  Minimum withdrawal amount is ${walletData.minWithdrawal.toFixed(2)}. 
                  Withdrawals typically process within 1-3 business days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
