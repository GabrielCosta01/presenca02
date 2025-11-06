import React from 'react';
import { Chart } from 'react-google-charts';

interface PieChartProps {
  data: (string | number)[][];
  title: string;
  width?: string;
  height?: string;
}

/**
 * Componente para renderizar um gráfico de pizza.
 * @param data Os dados para o gráfico.
 * @param title O título do gráfico.
 * @param width A largura do gráfico.
 * @param height A altura do gráfico.
 */
const PieChart: React.FC<PieChartProps> = ({ data, title, width = '100%', height = '400px' }) => {
  return (
    <Chart
      width={width}
      height={height}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: title,
      }}
    />
  );
};

export default PieChart;