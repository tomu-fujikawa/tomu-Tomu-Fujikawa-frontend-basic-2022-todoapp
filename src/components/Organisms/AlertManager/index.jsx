import { useAlertHandlerContext } from "../../../contexts/alert_handler.jsx";
// path/to/contexts/alert_handler.jsx
import React, { useEffect } from "react";
import Alert from "../../Atoms/Alert/index.jsx";
const AlertManager = () => {
  /* コンポーネント関数内 */
  //Contextを取得
  const AlertHandlerContext = useAlertHandlerContext();
  //AlertHandlerContextから直接値が取り出せる
  // AlertHandlerContext.setAlert("タスクの名前が設定されていません。"); //Alertの表示
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
