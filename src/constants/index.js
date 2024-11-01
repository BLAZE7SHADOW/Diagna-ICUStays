import {
  gcsColumns,
  // labColumns,
} from "../components/DynamicTableColumnConstant";

export const BASEURL = import.meta.env.VITE_API_BASE_URL;

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
      columns : gcsColumns,
    },
    PUPIL: {
      route: "/neurology/Pupil",
      api: API_ROUTES.NEUROLOGY + "?type=Pupil",
    },
  },
  // LABS: {
  //   route: "/labs",
  //   api: API_ROUTES.LABS,
  //   labColumns,
  // },
};
