import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DefaultPage() {
  const navigate = useNavigate();

  useEffect(() => {
      navigate("/form");
  }, [navigate]);
  return <></>;
}

export default DefaultPage;
