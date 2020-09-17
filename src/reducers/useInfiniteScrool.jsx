import React from 'react';

const useInfiniteScroll = () => {
    const perPage = 10;

    const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'START':
        return { ...state, loading: action.payload };
      case 'LOADED':
        return {
          ...state,
          loading: false,
          data: [...state.data, ...action.payload],
          more: action.payload.length === perPage,
          after: state.after + action.payload.length,
        };
        case 'CLEAR_DATA':
          return {
            ...state,
            loading: false,
            data: [],
            more: true,
            after: 0,
          };
      default:
        throw new Error("Don't understand action");
    }
  }, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  });

  return {state, dispatch}
}

export default useInfiniteScroll;