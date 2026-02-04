import { CheckCircle2, Download, ArrowLeft, Mail, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { useState } from 'react';

export function PaymentSuccess() {
  const [backgroundStyle, setBackgroundStyle] = useState<'default' | 'gradient' | 'dark'>('default');

  const transactionDetails = {
    amount: '$149.99',
    transactionId: 'TXN-789123456',
    paymentMethod: '**** 4242',
    date: 'Dec 15, 2024',
    merchant: 'TechStore Pro',
    email: 'customer@example.com'
  };

  const backgrounds = {
    default: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50',
    dark: 'bg-slate-900'
  };

  const toggleBackground = () => {
    setBackgroundStyle(prev => {
      if (prev === 'default') return 'gradient';
      if (prev === 'gradient') return 'dark';
      return 'default';
    });
  };

  return (
    <div className={`min-h-screen ${backgrounds[backgroundStyle]} flex items-center justify-center p-4 transition-colors duration-500 relative`}>
      {/* Background Switch Button */}
      <Button
        onClick={toggleBackground}
        variant="outline"
        size="sm"
        className={`absolute top-4 right-4 gap-2 ${backgroundStyle === 'dark' ? 'bg-slate-800 text-white border-slate-700' : ''}`}
      >
        {backgroundStyle === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        Switch Background
      </Button>

      <Card className={backgroundStyle === 'dark' ? 'bg-slate-800 border-slate-700' : ''}>
        <CardContent className={`p-8 text-center space-y-6 ${backgroundStyle === 'dark' ? 'text-white' : ''}`}>
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <h1 className="text-green-600">Payment Successful!</h1>
            <p className={backgroundStyle === 'dark' ? 'text-slate-300' : 'text-muted-foreground'}>
              Your payment has been processed successfully. You will receive a confirmation email shortly.
            </p>
          </div>

          {/* Transaction Details */}
          <div className={`${backgroundStyle === 'dark' ? 'bg-slate-700/50' : 'bg-muted/50'} rounded-lg p-4 space-y-3`}>
            <div className="flex justify-between items-center">
              <span className={backgroundStyle === 'dark' ? 'text-slate-400' : 'text-muted-foreground'}>Amount</span>
              <span className="text-lg">{transactionDetails.amount}</span>
            </div>
            
            <Separator />
            
            <div className="flex justify-between items-center">
              <span className={backgroundStyle === 'dark' ? 'text-slate-400' : 'text-muted-foreground'}>Transaction ID</span>
              <Badge variant="outline" className="text-xs">
                {transactionDetails.transactionId}
              </Badge>
            </div>
            
            <div className="flex justify-between items-center">
              <span className={backgroundStyle === 'dark' ? 'text-slate-400' : 'text-muted-foreground'}>Payment Method</span>
              <span>{transactionDetails.paymentMethod}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className={backgroundStyle === 'dark' ? 'text-slate-400' : 'text-muted-foreground'}>Date</span>
              <span>{transactionDetails.date}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className={backgroundStyle === 'dark' ? 'text-slate-400' : 'text-muted-foreground'}>Merchant</span>
              <span>{transactionDetails.merchant}</span>
            </div>
          </div>

          {/* Email Confirmation */}
          <div className={`flex items-center justify-center gap-2 text-sm p-3 rounded-lg ${
            backgroundStyle === 'dark' 
              ? 'bg-blue-900/30 text-blue-300' 
              : 'bg-blue-50 text-muted-foreground'
          }`}>
            <Mail className="w-4 h-4" />
            <span>Receipt sent to {transactionDetails.email}</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button className="w-full" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Receipt
            </Button>
            
            <Button variant="outline" className="w-full" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Store
            </Button>
          </div>

          {/* Support Info */}
          <p className={`text-xs pt-4 ${backgroundStyle === 'dark' ? 'text-slate-400' : 'text-muted-foreground'}`}>
            Need help? Contact our support team at support@techstore.com
          </p>
        </CardContent>
      </Card>
    </div>
  );
}