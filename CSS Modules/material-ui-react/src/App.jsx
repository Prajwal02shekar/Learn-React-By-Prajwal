// import * as React from 'react';
// import Button from '@mui/material/Button';

// export default function ButtonUsage() {
//   return <Button variant="contained">Hello world</Button>;
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';



export default function App() {
  const [value, setValue] = React.useState(2);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (<>

    <Switch {...label} defaultChecked />
    <Switch {...label} />
    <Switch {...label} disabled defaultChecked />
    <Switch {...label} disabled />
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >

      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Stack>


  </>

  );
}

