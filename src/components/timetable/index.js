import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";

const date = new Date();
const create_date_string = (num=1) => {
    const new_date = new Date()
    new_date.setDate(date.getDate() + num)
    return new_date.toDateString()
}

function Timetable() {
  const rows = [
    {
      id: 1,
      date: date.toDateString(),
      fajr: "2:57",
      dhuhr: "1:12",
      asr: "6:55",
      maghrib: "9:44",
      isha: "11:28",
    },
    {
      id: 2,
      date: create_date_string(1),
      fajr: "2:58",
      dhuhr: "1:13",
      asr: "6:56",
      maghrib: "9:45",
      isha: "11:29",
    },
    {
      id: 3,
      date: create_date_string(2),
      fajr: "2:59",
      dhuhr: "1:14",
      asr: "6:57",
      maghrib: "9:46",
      isha: "11:30",
    },
  ];

  const columns = [
    { field: "date", headerName: "Date", width: 200 },
    { field: "fajr", headerName: "Fajr" },
    { field: "dhuhr", headerName: "Dhuhr" },
    { field: "asr", headerName: "Asr" },
    { field: "maghrib", headerName: "Maghrib" },
    { field: "isha", headerName: "Isha" },
  ];

  return (
    <div className="timeTable">
      <Grid container>
        <Grid item style={{ width: "700px" }}>
          <h1>Salah Times</h1>
          <h3>{date.toLocaleString('default', { month: 'long' })}</h3>
          <DataGrid
            rows={rows}
            columns={columns}
            disableSelectionOnClick
            autoHeight
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Timetable;
