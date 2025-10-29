import React, { useRef } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DataRow } from '../App';

interface DataLoaderProps {
  onDataLoad: (data: DataRow[]) => void;
}

const DataLoader: React.FC<DataLoaderProps> = ({ onDataLoad }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const rows = text.split('\n').filter(row => row.trim());
      
      if (rows.length < 2) {
        alert('CSV file must have at least a header and one data row');
        return;
      }

      const headers = rows[0].split(',').map(h => h.trim());
      const data: DataRow[] = [];

      for (let i = 1; i < rows.length; i++) {
        const values = rows[i].split(',').map(v => v.trim());
        const row: DataRow = {};
        
        headers.forEach((header, index) => {
          const value = values[index];
          // Try to parse as number, otherwise keep as string
          row[header] = isNaN(Number(value)) ? value : Number(value);
        });
        
        data.push(row);
      }

      onDataLoad(data);
    };

    reader.readAsText(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Load Data
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
          onClick={handleButtonClick}
        >
          Upload CSV File
        </Button>
        <Typography variant="body2" color="text.secondary">
          Select a CSV file to visualize
        </Typography>
      </Box>
    </Paper>
  );
};

export default DataLoader;