# Simple Data Visualizer

A simplified MVP version of [microsoft/data-formulator](https://github.com/microsoft/data-formulator) - Create visualizations with an intuitive drag-and-drop interface.

## Features

- 📁 **CSV Data Loading**: Upload and parse CSV files
- 📊 **Interactive Visualizations**: Create bar charts, line charts, and scatter plots
- 🎯 **Drag-and-Drop Interface**: Easily map data fields to visualization channels (x-axis, y-axis, color)
- 🎨 **Modern UI**: Built with Material-UI for a clean, professional look
- ⚡ **Fast & Lightweight**: Minimal dependencies focused on core visualization features

## Tech Stack

This MVP uses the same core technologies as the parent repository:

- **React 18.2.0** - UI framework
- **TypeScript 4.9.5** - Type safety
- **Vite 5.4.19** - Build tool
- **Material-UI 7.1.1** - Component library
- **Vega-Lite 5.5.0** - Visualization grammar
- **react-dnd 16.0.1** - Drag-and-drop functionality
- **d3 7.3.0** - Data utilities

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/simple-data-visualizer.git
cd simple-data-visualizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Load Data**: Click "Upload CSV File" and select a CSV file from your computer
2. **Preview Data**: View the first 10 rows of your data in the table
3. **Choose Chart Type**: Select from Bar, Line, or Scatter plot
4. **Drag Fields**: Drag field names from "Available Fields" to the encoding channels (X Axis, Y Axis, Color)
5. **View Visualization**: Your chart will automatically appear once X and Y axes are mapped

### Sample CSV Format

```csv
Category,Value,Region
A,30,North
B,50,South
C,40,East
D,60,West
```

## MVP Scope

This MVP focuses on the core visualization feature from Data Formulator:

✅ **Included:**
- CSV data loading and parsing
- Data preview table
- Drag-and-drop field mapping
- Three chart types (bar, line, scatter)
- Vega-Lite visualization rendering
- Basic color encoding

❌ **Not Included (from parent):**
- AI-powered data transformation
- Natural language queries
- Python backend / Flask API
- Database integration (DuckDB)
- Multi-table joins
- Advanced data transformations
- User authentication
- Data persistence
- External data loaders

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Project Structure

```
simple-data-visualizer/
├── src/
│   ├── components/
│   │   ├── ChartBuilder.tsx      # Chart type selector and field mapping UI
│   │   ├── ChartDisplay.tsx      # Vega-Lite chart renderer
│   │   ├── DataLoader.tsx        # CSV file upload component
│   │   ├── DataTable.tsx         # Data preview table
│   │   ├── DraggableField.tsx    # Draggable field chip
│   │   └── FieldSlot.tsx         # Drop zone for fields
│   ├── App.tsx                   # Main application component
│   ├── index.tsx                 # Application entry point
│   └── index.css                 # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Contributing

Contributions are welcome! This is an MVP, so there's plenty of room for enhancements.

## License

MIT License - feel free to use this project for learning and experimentation.

## Acknowledgments

This MVP is inspired by [microsoft/data-formulator](https://github.com/microsoft/data-formulator), a research project from Microsoft Research that combines UI and natural language for data visualization.

## Learn More

- [Original Data Formulator](https://github.com/microsoft/data-formulator)
- [Vega-Lite Documentation](https://vega.github.io/vega-lite/)
- [React DnD Documentation](https://react-dnd.github.io/react-dnd/)
- [Material-UI Documentation](https://mui.com/)