import React from 'react';
import { useDrag } from 'react-dnd';
import { Chip } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface DraggableFieldProps {
  name: string;
}

const DraggableField: React.FC<DraggableFieldProps> = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FIELD',
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Chip
      ref={drag}
      icon={<DragIndicatorIcon />}
      label={name}
      sx={{
        cursor: 'grab',
        opacity: isDragging ? 0.5 : 1,
        '&:active': {
          cursor: 'grabbing',
        },
      }}
    />
  );
};

export default DraggableField;