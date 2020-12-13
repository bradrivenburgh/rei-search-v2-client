import React from 'react';
import { useParams } from "react-router-dom";

function AccountChild() {
  let { component } = useParams();

  let componentDictionary = {
    'edit-email': 'Edit your email address',
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