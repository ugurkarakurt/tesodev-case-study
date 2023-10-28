import { Success, Warning, Danger, Info, AlertContent, AlertTitle, AlertDescription, AlertButton } from './alert.styles';
import { Fragment, useContext } from 'react';
import { AlertContext } from '../../contexts/alert.context';

export const ALERT_TYPE_CLASSES = {
  success: 'success', warning: 'warning', danger: 'danger', info: 'info'
};

const getAlert = (alertType = ALERT_TYPE_CLASSES.success) =>
({
  [ALERT_TYPE_CLASSES.success]: Success,
  [ALERT_TYPE_CLASSES.warning]: Warning,
  [ALERT_TYPE_CLASSES.danger]: Danger,
  [ALERT_TYPE_CLASSES.info]: Info,

}[alertType]);

const AlertMessage = () => {
  const { alert } = useContext(AlertContext);
  const { isShow, alertType, title, description, buttonContent } = alert;
  const CustomAlert = getAlert(alertType);
  let contentToDisplay = null;

  if (typeof description === "object") {
    const descriptions = description ? Object.entries(description) : [];
    const filteredDescriptions = descriptions.filter(([key, value]) => value);

    contentToDisplay = filteredDescriptions.map(([key, value]) => (
      <span key={key}>
        <b>{key}: </b>
        {value}
      </span>
    ));
  } else if (typeof description === "string") {
    contentToDisplay = description;
  }


  return (
    <Fragment>
      {isShow && (
        <CustomAlert>
          <AlertContent>
            <AlertTitle>
              {title}
            </AlertTitle>
            <AlertDescription>
              {contentToDisplay}
            </AlertDescription>
          </AlertContent>
          <AlertButton>
            {buttonContent}
          </AlertButton>
        </CustomAlert>
      )}
    </Fragment>
  );
};

export default AlertMessage;
