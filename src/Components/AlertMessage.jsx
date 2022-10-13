import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const AlertMessage = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 8000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Stack spacing={3}>
      <Alert status={variant} variant="solid">
        <AlertIcon />
        {children}
      </Alert>
    </Stack>
  );
};

AlertMessage.defaultPros = {
  variant: "info",
};

export default AlertMessage;
