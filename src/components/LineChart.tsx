import React from 'react';
import { Chart } from 'react-google-charts';

interface LineChartProps {
  data: (string | number)[][];
  title: string;
  width?: string;
  height?: string;
}

/**
 * Componente para renderizar um gráfico de linhas.
 * @param data Os dados para o gráfico.
 * @param title O título do gráfico.
 * @param width A largura do gráfico.
 * @param height A altura do gráfico.
 */
const LineChart: React.FC<LineChartProps> = ({ data, title, width = '100%', height = '400px' }) => {
  return (
    <Chart
      width={width}
      height={height}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: title,
        hAxis: {
          title: 'X-Axis',
        },
        vAxis: {
          title: 'Y-Axis',
        },
      }}
    />
  );
};

export default LineChart;