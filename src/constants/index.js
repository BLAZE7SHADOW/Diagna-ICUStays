import {
  gcsColumns,
  labColumns,
  motorColumns,
  orientationColumns,
  pupilColumns,
  strengthColumns,
  // labColumns,
} from "../components/DynamicTableColumnConstant";

export const BASEURL = import.meta.env.VITE_API_BASE_URL;

export const API_ROUTES = {
  MISC: "/misc/allStays",
  NEUROLOGY: "/neurology",
  LABS: "/labs",
  VENTILATION: "/ventilation",
  GET_DATE_RANGE: "/misc/getDateRange",
};

export const ROUTE_PATHS = {
  NEUROLOGY: {
    GCS: {
      route: "/neurology/gcs",
      api: API_ROUTES.NEUROLOGY + "?type=GCS",
      columns: gcsColumns,
      params: ["type", "date", "stay_id"],
    },
    PUPIL: {
      route: "/neurology/pupil",
      api: API_ROUTES.NEUROLOGY + "?type=Pupil",
      columns: pupilColumns,
      params: ["type", "date", "stay_id"],
    },
    STRENGTH: {
      route: "/neurology/strength",
      api: API_ROUTES.NEUROLOGY + "?type=Strength",
      columns: strengthColumns,
      params: ["type", "date", "stay_id"],
    },
    ORIENTATION: {
      route: "/neurology/orientation",
      api: API_ROUTES.NEUROLOGY + "?type=Orientation",
      columns: orientationColumns,
      params: ["type", "date", "stay_id"],
    },
    MOTOR: {
      route: "/neurology/motor",
      api: API_ROUTES.NEUROLOGY + "?type=Motor",
      columns: motorColumns,
      params: ["type", "date", "stay_id"],
    },
  },
  LABS: {
    route: "/labs",
    api: API_ROUTES.LABS,
    columns: labColumns,
    params: ["date", "stay_id"],
  },
  VENTILATION: {
    SETTING: {
      route: "/ventilation/setting",
      api: API_ROUTES.VENTILATION + "?type=setting",
      columns: gcsColumns,
      params: ["type", "date", "stay_id"],
    },
    OBSERVATION: {
      route: "/ventilation/observation",
      api: API_ROUTES.VENTILATION + "?type=observation",
      columns: pupilColumns,
      params: ["type", "date", "stay_id"],
    },
  },
};
