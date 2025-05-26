import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function InvestorROICalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(8);
  const [duration, setDuration] = useState(12);
  const [interest, setInterest] = useState(null);
  const [totalReturn, setTotalReturn] = useState(null);

  const calculateROI = () => {
    const interestEarned = (amount * rate * (duration / 12)) / 100;
    const total = amount + interestEarned;
    setInterest(interestEarned.toFixed(2));
    setTotalReturn(total.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex flex-col items-center justify-center px-4">
      <header className="mb-6 text-center">
        <Image src="/logo.png" alt="Investor Logo" width={80} height={80} className="mx-auto mb-2 rounded-full" />
        <h1 className="text-white text-3xl font-bold">A&H Investor Tools</h1>
        <p className="text-gray-400 text-sm">Maximise your returns with precision</p>
      </header>

      <div className="w-full max-w-md">
        <Card className="rounded-2xl shadow-2xl border border-gray-700 bg-black/70 backdrop-blur-md">
          <CardContent className="p-8 space-y-6 text-white">
            <h2 className="text-xl font-semibold text-center">📊 Investor ROI Calculator</h2>

            <div className="space-y-1">
              <Label className="text-sm text-gray-300">Amount Invested (£)</Label>
              <Input
                type="number"
                value={amount}
                className="bg-gray-800 text-white border-gray-600"
                onChange={(e) => setAmount(parseFloat(e.target.value))}
              />
            </div>

            <div className="space-y-1">
              <Label className="text-sm text-gray-300">Annual Interest Rate (%)</Label>
              <Input
                type="number"
                value={rate}
                className="bg-gray-800 text-white border-gray-600"
                onChange={(e) => setRate(parseFloat(e.target.value))}
              />
            </div>

            <div className="space-y-1">
              <Label className="text-sm text-gray-300">Investment Duration (Months)</Label>
              <Input
                type="number"
                value={duration}
                className="bg-gray-800 text-white border-gray-600"
                onChange={(e) => setDuration(parseFloat(e.target.value))}
              />
            </div>

            <Button
              onClick={calculateROI}
              className="w-full bg-gradient-to-r from-green-500 to-lime-400 hover:from-green-600 hover:to-lime-500 text-black font-semibold"
            >
              Calculate ROI
            </Button>

            {interest !== null && (
              <div className="mt-4 bg-gray-800 p-4 rounded-xl space-y-2">
                <p><span className="font-semibold">💰 Interest Earned:</span> £{interest}</p>
                <p><span className="font-semibold">📈 Total Return:</span> £{totalReturn}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
