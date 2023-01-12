import { useAlertHandlerContext } from "../../../contexts/alert_handler.jsx";
import React, { useEffect } from "react";
import Alert from "../../Atoms/Alert/index.jsx";
const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  useEffect(() => {
    if (AlertHandlerContext.visible === true) {
      window.setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
    }
  }, [AlertHandlerContext]);

  return (
    <>
      <Alert
        isActive={AlertHandlerContext.visible}
        alertMessage={AlertHandlerContext.errorText}
      />
    </>
  );
};
export default AlertManager;
