import React, { useEffect, useReducer } from 'react';

const withAction = (ChildComponent, actionCreator, {reducer, initialState}) => {
    const ComposedHocComp = () => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <ChildComponent state={state} action={actionCreator(state, dispatch)}/>
        )
    }

    return ComposedHocComp;
};

export default withAction;