import React from "react";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";

export function EmployeeCard(props) {
  const { name, phone, email } = props.employee;

  return (
    <li>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography color="text.secondary" component="h3" gutterBottom>
            {phone}
          </Typography>
          <Typography variant="body1" component="p">
            {email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </li>
  );
}
