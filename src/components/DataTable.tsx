import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DataRow } from '../App';

interface DataTableProps {
  data: DataRow[];
  columns: string[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  const displayData = data.slice(0, 10); // Show first 10 rows

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Data Preview ({data.length} rows)
      </Typography>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column} sx={{ fontWeight: 'bold', bgcolor: 'grey.100' }}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayData.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column}>
                    {row[column]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data.length > 10 && (
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
          Showing first 10 of {data.length} rows
        </Typography>
      )}
    </Paper>
  );
};

export default DataTable;