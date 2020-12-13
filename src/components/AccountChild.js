import React from 'react';
import EditEmail from './EditEmail';
import ChangePassword from './ChangePassword';
import ExportData from './ExportData';
import DeleteAccount from './DeleteAccount';
import { useParams } from "react-router-dom";

function AccountChild() {
  let { component } = useParams();

  let componentDictionary = {
    'edit-email': <EditEmail />,
    'change-password': <ChangePassword />,
    'export-data': <ExportData />,
    'delete-account': <DeleteAccount />,
  }

  return (
    <>
      {componentDictionary[component]}
    </>
  );
}

export default AccountChild;