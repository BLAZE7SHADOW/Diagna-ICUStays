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
};

export const ROUTE_PATHS = {
  NEUROLOGY: {
    GCS: {
      route: "/neurology/gcs",
      api: API_ROUTES.NEUROLOGY + "?type=GCS",
      columns: gcsColumns,
    },
    PUPIL: {
      route: "/neurology/pupil",
      api: API_ROUTES.NEUROLOGY + "?type=Pupil",
      columns: pupilColumns,
    },
    STRENGTH: {
      route: "/neurology/strength",
      api: API_ROUTES.NEUROLOGY + "?type=Strength",
      columns: strengthColumns,
    },
    ORIENTATION: {
      route: "/neurology/orientation",
      api: API_ROUTES.NEUROLOGY + "?type=Orientation",
      columns: orientationColumns,
    },
    MOTOR: {
      route: "/neurology/motor",
      api: API_ROUTES.NEUROLOGY + "?type=Motor",
      columns: motorColumns,
    },
  },
  LABS: {
    route: "/labs",
    api: API_ROUTES.LABS,
    columns: labColumns,
  },
  VENTILATION: {
    SETTING: {
      route: "/ventilation/setting",
      api: API_ROUTES.VENTILATION + "?type=setting",
      columns: gcsColumns,
    },
    OBSERVATION: {
      route: "/ventilation/observation",
      api: API_ROUTES.VENTILATION + "?type=observation",
      columns: pupilColumns,
    },
  },
};
