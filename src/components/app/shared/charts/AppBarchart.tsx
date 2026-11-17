import { currencyFormat } from '@/utils/functions';
import { cn } from 'cn';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

type BarchartProps = {
  name: string;
  colors: string[];
  className?: string;
  xaxisType: string;
  xaxisData: string[];
  yaxisType: string;
  data: number[];
};

const AppBarchart = ({
  name,
  colors,
  className,
  xaxisType,
  xaxisData,
  yaxisType,
  data,
}: BarchartProps) => {
  const chartRef = useRef(null);
  const format = currencyFormat();

  useEffect(() => {
    const chartDom = chartRef.current;

    if (!chartDom) return;

    const genderWiseChart = echarts.init(chartDom);

    const option = {
      color: colors,
      tooltip: {
        trigger: 'axis',
        valueFormatter: (value: number) => format.format(value),
        backgroundColor: '#111827',
        borderColor: '#374151',
        borderWidth: 1,
        padding: [10, 14],
        textStyle: {
          color: '#F9FAFB',
          fontSize: 11,
          fontFamily: 'Inter, sans-serif',
        },
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        orient: 'vertical',
        top: '5%',
        selectedMode: false,
        right: 10,
        itemGap: 12,
        textStyle: {
          color: '#374151',
          fontSize: 11,
          fontFamily: 'Inter, sans-serif',
        },
      },
      grid: {
        top: 50,
        bottom: 10,
        left: 20,
        right: 20,
        containLabel: true,
      },
      series: [
        {
          name: name,
          type: 'bar',
          data: data,
          barWidth: '50%',
          barMaxWidth: 45,
        },
      ],
      emphasis: {
        disabled: true,
      },
      xAxis: {
        type: xaxisType,
        data: xaxisData,
      },
      yAxis: {
        type: yaxisType,
        axisLabel: {
          formatter: (value: number) => format.format(value),
          show: false,
        },
      },
      media: [
        {
          query: { maxWidth: 375 },
          option: {
            legend: {
              orient: 'horizontal',
              left: 'center',
              right: 'auto',
              top: 0,
              itemGap: 8,
              textStyle: {
                fontSize: 10,
                fontFamily: 'Inter, sans-serif',
              },
            },
            grid: {
              top: 50,
              bottom: 15,
              left: 5,
              right: 10,
              containLabel: true,
            },
            xAxis: {
              axisLabel: {
                fontSize: 10,
                hideOverlap: true,
              },
            },
            yAxis: {
              axisLabel: {
                show: false,
              },
            },
            series: [
              {
                barMaxWidth: 30,
              },
            ],
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
export default AppBarchart;
