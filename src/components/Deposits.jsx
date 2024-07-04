import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Jumlah Total Korban</Title>
      <Typography component="p" variant="h4">
        40156
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 12 January, 2024
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Data
        </Link>
      </div>
    </React.Fragment>
  );
}