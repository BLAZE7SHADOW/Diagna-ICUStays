import {
  gcsColumns,
  labColumns,
} from "../components/DynamicTableColumnConstant";

export const API_ROUTES = {
  MISC: "/misc/allStays",
  NEUROLOGY: "/neurology",
  LABS: "/labs",
  VENTILATION: "/ventilation",
};

export const ROUTE_PATHS = {
  NEUROLOGY: {
    GCS: {
      route: "/neurology/gcs",
      api: API_ROUTES.NEUROLOGY + "?type=GCS",
      gcsColumns,
    },
    PUPIL: {
      route: "/neurology/Pupil",
      api: API_ROUTES.NEUROLOGY + "?type=Pupil",
      columns,
    },
  },
  LABS: {
    route: "/labs",
    api: API_ROUTES.LABS,
    labColumns,
  },
};
