import { useLocation } from "react-router";
import NeurologyTable from "../NeurologyTable";
import LabsTable from "../LabsTable";
import VentilationTable from "../VentilationTable";
import withDynamicDataFetch from "../withDynamicDataFetch";
import { useEffect } from "react";

function DynamicContent({ api, columns }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const stayId = params.get("stayId");
  const date = params.get("date");
  const type = params.get("type");
  const section = params.get("section");

  useEffect(() => {
    f
  },[])
}

export default DynamicContent;
