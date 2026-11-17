import { currencyFormat } from '@/utils/functions';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { cn } from 'cn';

type DonutProps = {
  name: string;
  colors: string[];
  data: { name: string; value: number }[];
  className?: string;
  theme?: string;
};

const AppPiechart = ({ name, colors, data, className }: DonutProps) => {
  const chartRef = useRef(null);
  const format = currencyFormat();

  useEffect(() => {
    const theme = localStorage.getItem('sarathi-web-theme');
    const chartDom = chartRef.current;

    if (!chartDom) return;

    const genderWiseChart = echarts.init(chartDom);

    const option = {
      color: colors,
      tooltip: {
        trigger: 'item',
        backgroundColor: '#111827',
        borderColor: '#374151',
        borderWidth: 1,
        padding: [10, 14],
        textStyle: {
          color: theme === 'dark' ? '#fff' : '#F9FAFB',
          fontSize: 13,
          fontFamily: 'Inter, sans-serif',
        },
        extraCssText: `
              border-radius: 10px;
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
            `,
        formatter: (params: any) => {
          return `${params.name}: ${format.format(params.value)} (${params.percent.toFixed(1)}%)`;
        },
      },
      legend: {
        orient: 'vertical',
        top: 'middle',
        selectedMode: false,
        right: 10,
        itemGap: 12,
        textStyle: {
          color: theme === 'dark' ? '#fff' : '#374151',
          fontSize: 11,
          fontFamily: 'Inter, sans-serif',
        },
      },
      series: [
        {
          name: name,
          type: 'pie',
          radius: '80%',
          center: ['40%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth: 0,
          },
          label: {
            show: false,
            position: 'center',
          },
          labelLine: {
            show: false,
          },
          data: data,
        },
      ],
      emphasis: {
        // disabled: true,
        itemStyle: {
          shadowBlur: 2,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      media: [
        {
          query: { maxWidth: 375 },
          option: {
            tooltip: {
              padding: [5, 7],
              textStyle: {
                fontSize: 11,
              },
              extraCssText: `
              border-radius: 5px;
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
            `,
            },
            legend: {
              orient: 'horizontal',
              left: 'center',
              right: 'auto',
              top: 'auto',
              bottom: 0,
            },
            series: [
              {
                center: ['50%', '42%'],
                radius: '65%',
              },
            ],
          },
        },
        {
          option: {
            legend: {
              orient: 'vertical',
              top: 'middle',
              selectedMode: false,
              right: 10,
              itemGap: 12,
            },
          },
        },
      ],
    };

    genderWiseChart.setOption(option);

    const handleResize = () => genderWiseChart.resize();
    window.addEventListener('resize', handleResize);

    // Clean up when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      genderWiseChart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} className={cn('w-full h-55', className)} />;
};
export default AppPiechart;
