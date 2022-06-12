import { DataGrid } from '@mui/x-data-grid';
function timetable() {

    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ];
      
      const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
      ];

    return (
        <div className="timetable">
            <header className="App-header">
                <h1>
                    A timetable for Salah times
                </h1>
                WHY IS THIS NOT WORKING
                <DataGrid rows={rows} columns={columns} />
            </header>
        </div>
    )
}

export default timetable