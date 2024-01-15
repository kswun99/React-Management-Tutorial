import React from "react";

interface CustomerProps {
  name: string;
  birthday: string;
  gender: string;
  job: string;
}

const Customer: React.FC<CustomerProps> = ({ name, birthday, gender, job }) => {
  return (
    <div>
      <h2>Customer Name: {name}</h2>
      <p>Birthday: {birthday}</p>
      <p>Gender: {gender}</p>
      <p>Job: {job}</p>
    </div>
  );
};

export default Customer;
