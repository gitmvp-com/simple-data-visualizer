import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Box, Typography } from '@mui/material';
import DataLoader from './components/DataLoader';
import DataTable from './components/DataTable';
import ChartBuilder from './components/ChartBuilder';
import ChartDisplay from './components/ChartDisplay';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

export interface DataRow {
  [key: string]: string | number;
}

export interface FieldMapping {
  x: string | null;
  y: string | null;
  color: string | null;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [fieldMapping, setFieldMapping] = useState<FieldMapping>({
    x: null,
    y: null,
    color: null,
  });
  const [chartType, setChartType] = useState<'bar' | 'line' | 'scatter'>('bar');

  const handleDataLoad = (loadedData: DataRow[]) => {
    setData(loadedData);
    if (loadedData.length > 0) {
      setColumns(Object.keys(loadedData[0]));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth={false} sx={{ height: '100vh', py: 3 }}>
          <Typography variant="h4" gutterBottom>
            📊 Simple Data Visualizer
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Load CSV data and create visualizations with drag-and-drop
          </Typography>
          
          <Box sx={{ mt: 3 }}>
            <DataLoader onDataLoad={handleDataLoad} />
          </Box>

          {data.length > 0 && (
            <>
              <Box sx={{ mt: 3 }}>
                <DataTable data={data} columns={columns} />
              </Box>

              <Box sx={{ mt: 3 }}>
                <ChartBuilder
                  columns={columns}
                  fieldMapping={fieldMapping}
                  setFieldMapping={setFieldMapping}
                  chartType={chartType}
                  setChartType={setChartType}
                />
              </Box>

              {fieldMapping.x && fieldMapping.y && (
                <Box sx={{ mt: 3 }}>
                  <ChartDisplay
                    data={data}
                    fieldMapping={fieldMapping}
                    chartType={chartType}
                  />
                </Box>
              )}
            </>
          )}
        </Container>
      </DndProvider>
    </ThemeProvider>
  );
};

export default App;