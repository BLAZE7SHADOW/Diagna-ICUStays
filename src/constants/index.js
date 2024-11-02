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
  STAY_DETAILS: "/misc/stayDetails",
};

export const ROUTE_PATHS = {
  NEUROLOGY: {
    GCS: {
      type: "GCS",
      route: "/neurology/gcs",
      api: API_ROUTES.NEUROLOGY + "?type=GCS",
      columns: gcsColumns,
      params: ["date", "stay_id"],
    },
    PUPIL: {
      type: "Pupil",
      route: "/neurology/pupil",
      api: API_ROUTES.NEUROLOGY + "?type=Pupil",
      columns: pupilColumns,
      params: ["date", "stay_id"],
    },
    STRENGTH: {
      type: "Strength",
      route: "/neurology/strength",
      api: API_ROUTES.NEUROLOGY + "?type=Strength",
      columns: strengthColumns,
      params: ["date", "stay_id"],
    },
    ORIENTATION: {
      type: "Orientation",
      route: "/neurology/orientation",
      api: API_ROUTES.NEUROLOGY + "?type=Orientation",
      columns: orientationColumns,
      params: ["date", "stay_id"],
    },
    MOTOR: {
      type: "Motor",
      route: "/neurology/motor",
      api: API_ROUTES.NEUROLOGY + "?type=Motor",
      columns: motorColumns,
      params: ["date", "stay_id"],
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
      type: "Setting",
      route: "/ventilation/setting",
      api: API_ROUTES.VENTILATION + "?type=setting",
      columns: gcsColumns,
      params: ["date", "stay_id"],
    },
    OBSERVATION: {
      type: "Observation",
      route: "/ventilation/observation",
      api: API_ROUTES.VENTILATION + "?type=observation",
      columns: pupilColumns,
      params: ["date", "stay_id"],
    },
  },
};
