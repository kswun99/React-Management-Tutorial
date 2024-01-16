import React from "react";
import { TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";

interface CustomerProps {
  id: number;
  image: string;
  name: string;
  birthday: string;
  gender: string;
  job: string;
}

const Customer: React.FC<CustomerProps> = ({
  id,
  image,
  name,
  birthday,
  gender,
  job,
}) => {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <img src={image} alt="profile" />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{birthday}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{job}</TableCell>
    </TableRow>
  );
};

export default Customer;
