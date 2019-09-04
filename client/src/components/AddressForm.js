import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';


export default function ClientInformation() {
  // email, phone, zipcode,
  const [name, setName] = React.useState('');
  const [count, setCount] = React.useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Client Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            value=""
            id="businessName"
            name="address1"
            label="Business Name"
            fullWidth
            autoComplete="Business Name"
            onChange={() => setName(name)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="emailaddress"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email-address-line"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phonenumber"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete="phone-number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing-postal-code"
          />
        </Grid>
      </Grid>

      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
      </button>
      </div>

    </React.Fragment>
  );
}