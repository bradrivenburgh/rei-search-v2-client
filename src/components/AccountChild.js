import React from 'react';
import EditEmail from './EditEmail';
import { useParams } from "react-router-dom";

function AccountChild() {
  let { component } = useParams();

  let componentDictionary = {
    'edit-email': <EditEmail />,
    'change-password': 'Change your password',
    'export-data': 'Export your data',
    'delete-account': 'Delete your account',
  }

  return (
    <>
      {componentDictionary[component]}
    </>
  );
}

export default AccountChild;