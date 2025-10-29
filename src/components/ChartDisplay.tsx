import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import { VegaLite } from 'react-vega';
import { DataRow, FieldMapping } from '../App';

interface ChartDisplayProps {
  data: DataRow[];
  fieldMapping: FieldMapping;
  chartType: 'bar' | 'line' | 'scatter';
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({ data, fieldMapping, chartType }) => {
  const spec = useMemo(() => {
    const mark = chartType === 'scatter' ? 'point' : chartType;
    
    const encoding: any = {
      x: { field: fieldMapping.x, type: 'nominal' },
      y: { field: fieldMapping.y, type: 'quantitative' },
    };

    // Try to detect if x field is quantitative
    if (fieldMapping.x && typeof data[0][fieldMapping.x] === 'number') {
      encoding.x.type = 'quantitative';
    }

    if (fieldMapping.color) {
      encoding.color = { field: fieldMapping.color, type: 'nominal' };
    }

    return {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      width: 600,
      height: 400,
      data: { values: data },
      mark: mark,
      encoding: encoding,
    };
  }, [data, fieldMapping, chartType]);

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Visualization
      </Typography>
      <VegaLite spec={spec} actions={false} />
    </Paper>
  );
};

export default ChartDisplay;