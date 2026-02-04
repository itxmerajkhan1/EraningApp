import { 
  ArrowLeft,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  CreditCard,
  History,
  Users,
  Settings,
  Bell,
  Shield,
  LogOut,
  ChevronRight,
  Copy,
  CheckCircle2,
  TrendingUp,
  Wallet
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { useState } from 'react';
import { Navigation } from './Navigation';

interface ProfilePageProps {
  onBack: () => void;
}

export function ProfilePage({ onBack }: ProfilePageProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    memberSince: 'Jan 2024',
    membershipLevel: 'Gold',
    referralCode: 'JOHN2024'
  };

  const handleNavigation = (page: 'home' | 'tasks' | 'earnings' | 'wallet' | 'profile' | 'withdraw') => {
    // All navigation goes back to home for now, where it will be routed properly
    if (page !== 'profile') {
      onBack();
    }
  };

  const earningsHistory = [
    { date: 'Feb 3, 2026', description: 'Watch Videos', amount: '+$2.50', status: 'completed' },
    { date: 'Feb 2, 2026', description: 'Complete Survey', amount: '+$5.00', status: 'completed' },
    { date: 'Feb 1, 2026', description: 'Referral Bonus', amount: '+$5.00', status: 'completed' },
    { date: 'Jan 31, 2026', description: 'Daily Bonus', amount: '+$0.25', status: 'completed' },
    { date: 'Jan 30, 2026', description: 'Shop & Earn', amount: '+$12.50', status: 'completed' }
  ];

  const withdrawalHistory = [
    { date: 'Jan 28, 2026', method: 'PayPal', amount: '-$100.00', status: 'completed' },
    { date: 'Jan 15, 2026', method: 'Bank Transfer', amount: '-$250.00', status: 'completed' },
    { date: 'Dec 20, 2025', method: 'PayPal', amount: '-$150.00', status: 'completed' }
  ];

  const paymentMethods = [
    { type: 'PayPal', email: 'john.doe@paypal.com', primary: true },
    { type: 'Bank Account', details: '****6789', primary: false }
  ];

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText(userInfo.referralCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation currentPage="profile" onNavigate={handleNavigation} />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10 lg:ml-64">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack} className="lg:hidden">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h2 className="hidden lg:block">Profile</h2>
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 pb-24 lg:pb-8 lg:ml-64 space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
                  JD
                </div>
                <Button 
                  size="sm" 
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex-1 text-center md:text-left space-y-3">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <h2>{userInfo.name}</h2>
                    <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                      {userInfo.membershipLevel} Member
                    </Badge>
                  </div>
                  <div className="space-y-1 text-muted-foreground">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{userInfo.email}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{userInfo.phone}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{userInfo.location}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Member since {userInfo.memberSince}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline">
                  <Wallet className="w-4 h-4 mr-2" />
                  Withdraw
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total Earned</span>
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-3xl font-semibold">$1,247.50</div>
              <div className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +15.3% this month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Available Balance</span>
                <Wallet className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-semibold">$382.00</div>
              <div className="text-sm text-muted-foreground">Ready to withdraw</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total Referrals</span>
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-3xl font-semibold">23</div>
              <div className="text-sm text-muted-foreground">$115 earned</div>
            </CardContent>
          </Card>
        </div>

        {/* Referral Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Your Referral Code
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Share your referral code and earn $5 for each friend who joins!
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-muted p-4 rounded-lg font-mono text-lg font-semibold text-center">
                {userInfo.referralCode}
              </div>
              <Button onClick={handleCopyReferralCode}>
                {copiedCode ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

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
            {paymentMethods.map((method, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
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
                  {method.primary && (
                    <Badge variant="secondary">Primary</Badge>
                  )}
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Earnings History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5" />
                Recent Earnings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {earningsHistory.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <div className="font-medium">{item.description}</div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>
                    <div className="text-green-600 font-semibold">{item.amount}</div>
                  </div>
                  {index < earningsHistory.length - 1 && <Separator />}
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">
                View All Earnings
              </Button>
            </CardContent>
          </Card>

          {/* Withdrawal History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Withdrawal History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {withdrawalHistory.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <div className="font-medium">{item.method}</div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>
                    <div className="font-semibold">{item.amount}</div>
                  </div>
                  {index < withdrawalHistory.length - 1 && <Separator />}
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">
                View All Withdrawals
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Settings Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span>Notifications</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-muted-foreground" />
                <span>Privacy & Security</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-muted-foreground" />
                <span>Payment Settings</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <Separator className="my-2" />
            
            <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 rounded-lg transition-colors text-red-600">
              <div className="flex items-center gap-3">
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </div>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}