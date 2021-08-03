import React from 'react';
import styled from 'styled-components';

export const FeedbackForm = (props) => {
    
    const onSubmitHandler = (e) => {
        console.log(e);
    };

    const FeedbackForm = styled.form`

    `;
    
    return (
        <FeedbackForm onSubmit={onSubmitHandler}>
            <div>
                <label></label>
                <input type='text' name='' />
            </div>
        </FeedbackForm>
    );
}
