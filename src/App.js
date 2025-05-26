import React, { useState } from 'react';

function InvestorROICalculator() {
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
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h1>Investor ROI Calculator</h1>
      <div>
        <label>Amount Invested (£):</label>
        <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Annual Interest Rate (%):</label>
        <input type="number" value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Investment Duration (Months):</label>
        <input type="number" value={duration} onChange={(e) => setDuration(parseFloat(e.target.value))} />
      </div>
      <button onClick={calculateROI}>Calculate</button>
      {interest && (
        <div>
          <p><strong>Interest Earned:</strong> £{interest}</p>
          <p><strong>Total Return:</strong> £{totalReturn}</p>
        </div>
      )}
    </div>
  );
}

export default InvestorROICalculator;

