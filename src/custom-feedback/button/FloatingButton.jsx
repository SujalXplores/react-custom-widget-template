import React, { useState } from 'react';
import styled from 'styled-components';
import { FeedbackForm } from '../form/FeedbackForm';

const Button = styled.button`
    z-index: 2;
    padding: 0.5rem;
    background: ${props => props.background_color || 'black'};
    border: 0px;
    position: fixed;
    ${props => props.align === 'left' ? 'left' : 'right'}: 0;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
`;

const Span = styled.span`
    color: ${props => props.font_color || 'white'};
    writing-mode: vertical-lr;
`;

export const FloatingButton = (props) => {
    console.log(props)
    
    const [isFormVisible, setFormVisible] = useState(false);
    
    const toggleWidget = () => {
        setFormVisible(!isFormVisible);
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
            {isFormVisible && <FeedbackForm />}
            <Button
                align={props.align}
                background_color={props.background_color}
                onClick={toggleWidget} 
                {...props}
            >
                <Span font_color={props.font_color}>{props.label || 'Feedback!!'}{' '}{props.icon}</Span>  
            </Button>
        </React.Fragment>
    );
}
