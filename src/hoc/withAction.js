import React, { useReducer } from 'react';

const withAction = (ChildComponent, actionCreator, {reducer, initialState}) => {
    const ComposedHocComp = (props) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <ChildComponent {...props} state={state} action={actionCreator(state, dispatch)}/>
        )
    }

    return ComposedHocComp;
};

export default withAction;