import { 
  ArrowLeft,
  Wallet,
  CreditCard,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Building2,
  Info
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Navigation } from './Navigation';
import { useState } from 'react';

interface WithdrawPageProps {
  onNavigate: (page: 'home' | 'tasks' | 'earnings' | 'wallet' | 'profile' | 'withdraw') => void;
}

export function WithdrawPage({ onNavigate }: WithdrawPageProps) {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);
  const [amount, setAmount] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const walletBalance = 382.00;
  const minWithdrawal = 10.00;
  const maxWithdrawal = walletBalance;

  const paymentMethods = [
    { 
      id: 1,
      type: 'PayPal',
      email: 'john.doe@paypal.com',
      verified: true,
      primary: true,
      icon: Wallet,
      processingTime: '1-2 business days',
      fee: 0
    },
    { 
      id: 2,
      type: 'Bank Account',
      details: 'Chase Bank ****6789',
      verified: true,
      primary: false,
      icon: Building2,
      processingTime: '2-3 business days',
      fee: 0
    }
  ];

  const handleAmountChange = (value: string) => {
    // Only allow numbers and decimal point
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(value) || value === '') {
      setAmount(value);
    }
  };

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString());
  };

  const handleConfirmWithdrawal = () => {
    setShowConfirmation(true);
    // Simulate successful withdrawal
    setTimeout(() => {
      setShowConfirmation(false);
      onNavigate('wallet');
    }, 2000);
  };

  const isValidAmount = () => {
    const numAmount = parseFloat(amount);
    return numAmount >= minWithdrawal && numAmount <= maxWithdrawal;
  };

  const canWithdraw = selectedMethod !== null && amount !== '' && isValidAmount();

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Withdrawal Requested!</h2>
            <p className="text-muted-foreground mb-4">
              Your withdrawal of ${parseFloat(amount).toFixed(2)} has been submitted successfully.
            </p>
            <p className="text-sm text-muted-foreground">
              You will receive the funds within {paymentMethods.find(m => m.id === selectedMethod)?.processingTime}.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation currentPage="wallet" onNavigate={onNavigate} />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10 lg:ml-64">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => onNavigate('wallet')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Wallet
          </Button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 pb-24 lg:pb-8 lg:ml-64 space-y-6">
        {/* Balance Card */}
        <Card className="bg-gradient-to-br from-green-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-5 h-5" />
              <span className="text-sm opacity-90">Available Balance</span>
            </div>
            <div className="text-4xl font-bold">
              ${walletBalance.toFixed(2)}
            </div>
          </CardContent>
        </Card>

        {/* Withdrawal Amount */}
        <Card>
          <CardHeader>
            <CardTitle>Enter Withdrawal Amount</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (USD)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="amount"
                  type="text"
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  placeholder="0.00"
                  className="pl-10 text-2xl h-14 font-semibold"
                />
              </div>
              {amount !== '' && !isValidAmount() && (
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>
                    Amount must be between ${minWithdrawal.toFixed(2)} and ${maxWithdrawal.toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            {/* Quick Amount Buttons */}
            <div>
              <Label className="mb-2 block">Quick Select</Label>
              <div className="grid grid-cols-4 gap-2">
                <Button
                  variant="outline"
                  onClick={() => handleQuickAmount(25)}
                  className={amount === '25' ? 'border-green-500 bg-green-50' : ''}
                >
                  $25
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleQuickAmount(50)}
                  className={amount === '50' ? 'border-green-500 bg-green-50' : ''}
                >
                  $50
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleQuickAmount(100)}
                  className={amount === '100' ? 'border-green-500 bg-green-50' : ''}
                >
                  $100
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleQuickAmount(walletBalance)}
                  className={amount === walletBalance.toString() ? 'border-green-500 bg-green-50' : ''}
                >
                  All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Select Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              const isSelected = selectedMethod === method.id;
              
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full flex items-center justify-between p-4 border-2 rounded-lg transition-all ${
                    isSelected
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        isSelected ? 'text-green-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <div className="font-medium">{method.type}</div>
                      <div className="text-sm text-muted-foreground">
                        {method.email || method.details}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {method.processingTime} • {method.fee === 0 ? 'No fee' : `$${method.fee} fee`}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {method.verified && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {method.primary && (
                      <Badge variant="secondary">Primary</Badge>
                    )}
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Info className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  <strong>Withdrawal Policy:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Minimum withdrawal: ${minWithdrawal.toFixed(2)}</li>
                  <li>Processing time: 1-3 business days</li>
                  <li>No withdrawal fees</li>
                  <li>Withdrawals are processed Monday-Friday</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Confirm Button */}
        <Button
          className="w-full h-12 text-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
          disabled={!canWithdraw}
          onClick={handleConfirmWithdrawal}
        >
          {canWithdraw ? (
            <>Confirm Withdrawal of ${parseFloat(amount).toFixed(2)}</>
          ) : (
            <>Select Method & Enter Amount</>
          )}
        </Button>
      </div>
    </div>
  );
}
