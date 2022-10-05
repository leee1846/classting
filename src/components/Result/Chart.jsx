import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

function Chart({ correct, incorrect }) {
  useEffect(() => {
    const total = 5;

    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.data = [
      {
        key: '정답',
        count: correct,
        percentage: (correct / total) * 100,
      },
      {
        key: '오답',
        count: incorrect,
        percentage: (incorrect / total) * 100,
      },
    ];

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'key';
    chart.yAxes.push(new am4charts.ValueAxis());

    const series = chart.series.push(new am4charts.ColumnSeries());
    series.name = `${total}`;
    series.columns.template.tooltipText =
      '총문제수: {name}\n{key}: {count}개\n비율: {valueY}%';
    series.columns.template.fill = am4core.color('dodgerblue');
    series.dataFields.valueY = 'percentage';
    series.dataFields.categoryX = 'key';
    chart.cursor = new am4charts.XYCursor();
  }, []);

  return (
    <>
      <h2>차트</h2>
      <div id="chartdiv" style={{ width: '50%', height: '500px' }} />
    </>
  );
}

export default Chart;
