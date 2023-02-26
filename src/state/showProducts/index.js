import typeState from "./types";

let dayac = new Date();
let day = dayac.getDate() > 10 ? dayac.getDate() : "0" + dayac.getDate();
let month =
  dayac.getMonth() + 1 > 10
    ? dayac.getMonth() + 1
    : "0" + (dayac.getMonth() + 1);
let year = dayac.getFullYear();

const estadoInicial = {
  inputSearcher: "",
  date: {
    selection: `${year}-${month}-${day}`,
    state: false,
  },
  productTypeCombobox: {
    state: false,
    selection: -1,
  },
  productBrandCombobox: {
    state: false,
    selection: -1,
  },
  sellersCombobox: {
    state: false,
    selection: -1,
  },
};

function rootReducer(state = estadoInicial, accion) {
  console.log(accion);
  switch (accion.type) {
    case typeState.CHANGE_STATE_PRODUCT_TYPE_COMBOBOX:
      return {
        ...state,
        productTypeCombobox: {
          ...state.productTypeCombobox,
          state: accion.payload,
        },
      };
    case typeState.CHANGE_STATE_PRODUCT_BRAND_COMBOBOX:
      return {
        ...state,
        productBrandCombobox: {
          ...state.productBrandCombobox,
          state: accion.payload,
        },
      };
    case typeState.CHANGE_STATE_SELLERS_COMBOBOX:
      return {
        ...state,
        sellersCombobox: {
          ...state.sellersCombobox,
          state: accion.payload,
        },
      };
    case typeState.CHANGE_SELECTION_PRODUCT_TYPE_COMBOBOX:
      return {
        ...state,
        productTypeCombobox: {
          ...state.productTypeCombobox,
          selection: accion.payload,
        },
      };
    case typeState.CHANGE_SELECTION_PRODUCT_BRAND_COMBOBOX:
      return {
        ...state,
        productBrandCombobox: {
          ...state.productBrandCombobox,
          selection: accion.payload,
        },
      };
    case typeState.CHANGE_SELECTION_SELLERS_COMBOBOX:
      return {
        ...state,
        sellersCombobox: {
          ...state.sellersCombobox,
          selection: accion.payload,
        },
      };
    case typeState.CHANGE_INPUT_ITEM_SEARCHER:
      return {
        ...state,
        inputSearcher: accion.payload,
      };
    case typeState.CHANGE_INPUT_DATE:
      return {
        ...state,
        date: { ...state.date, selection: accion.payload },
      };
    case typeState.CHANGE_INPUT_CHECKBOX_DATE:
      return {
        ...state,
        date: { ...state.date, state: accion.payload },
      };
    default:
      return state;
  }
}
export default rootReducer;
