import React from 'react';
import { Chart } from 'react-google-charts';

interface BarChartProps {
  data: (string | number)[][];
  title: string;
  width?: string;
  height?: string;
}

/**
 * Componente para renderizar um gráfico de barras.
 * @param data Os dados para o gráfico.
 * @param title O título do gráfico.
 * @param width A largura do gráfico.
 * @param height A altura do gráfico.
 */
const BarChart: React.FC<BarChartProps> = ({ data, title, width = '100%', height = '400px' }) => {
  return (
    <Chart
      width={width}
      height={height}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: title,
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Value',
          minValue: 0,
        },
        vAxis: {
          title: 'Category',
        },
      }}
    />
  );
};

export default BarChart;