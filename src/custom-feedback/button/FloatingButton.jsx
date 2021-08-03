import React from 'react';
import styled from 'styled-components';
import { FeedbackForm } from '../form/FeedbackForm';

export const FloatingButton = (props) => {
    const Button = styled.button`
        padding: 0.5rem;
        color: ${props => props.font_color || 'white'};
        background: ${props => props.background_color || 'black'};
        border: 0px;
        position: fixed;
        ${props => props.align === 'left' ? 'left' : 'right'}: 0;
        font-size: 1rem;
        font-family: inherit;
        cursor: pointer;
    `;

    const Span = styled.span`
        writing-mode: vertical-lr;
    `;

    const onClickHandler = (event) => {
        console.log(event)
    }

    /**
    * @param options
    * 1> label?: string
    * 2> icon?: string
    * 3> align?: 'left | right'
    * 4> font_color?: 'string | hex value'
    * 5> background_color?: 'string | hex value'
    */
    
    return (
        <React.Fragment>
            <FeedbackForm />
            <Button 
                onClick={onClickHandler} 
                {...props}
            >
                <Span>{props.label || 'Feedback!!'}{' '}{props.icon}</Span>  
            </Button>
        </React.Fragment>
    );
}
