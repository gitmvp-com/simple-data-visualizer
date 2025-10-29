import React from 'react';
import { useDrop } from 'react-dnd';
import { Box, Typography, Chip, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface FieldSlotProps {
  label: string;
  fieldName: string | null;
  onDrop: (fieldName: string) => void;
  onClear: () => void;
}

const FieldSlot: React.FC<FieldSlotProps> = ({ label, fieldName, onDrop, onClear }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'FIELD',
    drop: (item: { name: string }) => onDrop(item.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const isActive = isOver && canDrop;

  return (
    <Box>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Box
        ref={drop}
        sx={{
          mt: 0.5,
          p: 2,
          border: '2px dashed',
          borderColor: isActive ? 'primary.main' : 'grey.300',
          bgcolor: isActive ? 'primary.50' : fieldName ? 'grey.50' : 'white',
          borderRadius: 1,
          minHeight: 56,
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.2s',
        }}
      >
        {fieldName ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Chip label={fieldName} color="primary" />
            <IconButton size="small" onClick={onClear}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        ) : (
          <Typography variant="body2" color="text.secondary">
            Drop a field here
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FieldSlot;