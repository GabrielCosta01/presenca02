import React, { useState, useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import { barChartData, lineChartData, pieChartData } from './data';

type ChartType = 'bar' | 'line' | 'pie';

function App() {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API loading
    setLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      try {
        // Simulate a potential error
        if (Math.random() > 0.8) {
          throw new Error('Failed to load chart data.');
        }
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [chartType]);

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <BarChart data={barChartData} title="Population of Largest U.S. Cities" />;
      case 'line':
        return <LineChart data={lineChartData} title="Company Performance" />;
      case 'pie':
        return <PieChart data={pieChartData} title="My Daily Activities" />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Google Charts com React e TypeScript</h1>
      <div className="buttons">
        <button onClick={() => setChartType('bar')}>Gráfico de Barras</button>
        <button onClick={() => setChartType('line')}>Gráfico de Linhas</button>
        <button onClick={() => setChartType('pie')}>Gráfico de Pizza</button>
      </div>
      <div className="chart-container">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && renderChart()}
      </div>
    </div>
  );
}

export default App;
