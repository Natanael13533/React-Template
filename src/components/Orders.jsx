import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '12 Jan, 2024',
    'Jawa Barat',
    '753',
    '9274',
    45,
  ),
  createData(
    1,
    '12 Jan, 2024',
    'Jawa Tengah',
    '580',
    '7479',
    38,
  ),
  createData(2, '12 Jan, 2024', 'Kalimatan Selatan', '490', '5816', 27),
  createData(
    3,
    '12 Jan, 2024',
    'Sulawesi Selatan',
    '267',
    '2708',
    23,
  ),
  createData(
    4,
    '12 Jan, 2024',
    'Kalimantan Timur',
    '252',
    '2110',
    21,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Data Korban</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Wilayah</TableCell>
            <TableCell>Total Bencana</TableCell>
            <TableCell>Korban Luka-Luka</TableCell>
            <TableCell align="right">Korban Jiwa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Data Lengkap
      </Link>
    </React.Fragment>
  );
}