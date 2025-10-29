import React from 'react';
import { Paper, Typography, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { FieldMapping } from '../App';
import FieldSlot from './FieldSlot';
import DraggableField from './DraggableField';

interface ChartBuilderProps {
  columns: string[];
  fieldMapping: FieldMapping;
  setFieldMapping: React.Dispatch<React.SetStateAction<FieldMapping>>;
  chartType: 'bar' | 'line' | 'scatter';
  setChartType: React.Dispatch<React.SetStateAction<'bar' | 'line' | 'scatter'>>;
}

const ChartBuilder: React.FC<ChartBuilderProps> = ({
  columns,
  fieldMapping,
  setFieldMapping,
  chartType,
  setChartType,
}) => {
  const handleChartTypeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newType: 'bar' | 'line' | 'scatter' | null,
  ) => {
    if (newType !== null) {
      setChartType(newType);
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Build Chart
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Chart Type
        </Typography>
        <ToggleButtonGroup
          value={chartType}
          exclusive
          onChange={handleChartTypeChange}
          aria-label="chart type"
        >
          <ToggleButton value="bar" aria-label="bar chart">
            <BarChartIcon sx={{ mr: 1 }} />
            Bar
          </ToggleButton>
          <ToggleButton value="line" aria-label="line chart">
            <ShowChartIcon sx={{ mr: 1 }} />
            Line
          </ToggleButton>
          <ToggleButton value="scatter" aria-label="scatter plot">
            <ScatterPlotIcon sx={{ mr: 1 }} />
            Scatter
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Available Fields
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {columns.map((column) => (
            <DraggableField key={column} name={column} />
          ))}
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Encoding Channels (Drag fields here)
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FieldSlot
            label="X Axis"
            fieldName={fieldMapping.x}
            onDrop={(fieldName) => setFieldMapping({ ...fieldMapping, x: fieldName })}
            onClear={() => setFieldMapping({ ...fieldMapping, x: null })}
          />
          <FieldSlot
            label="Y Axis"
            fieldName={fieldMapping.y}
            onDrop={(fieldName) => setFieldMapping({ ...fieldMapping, y: fieldName })}
            onClear={() => setFieldMapping({ ...fieldMapping, y: null })}
          />
          <FieldSlot
            label="Color (Optional)"
            fieldName={fieldMapping.color}
            onDrop={(fieldName) => setFieldMapping({ ...fieldMapping, color: fieldName })}
            onClear={() => setFieldMapping({ ...fieldMapping, color: null })}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default ChartBuilder;