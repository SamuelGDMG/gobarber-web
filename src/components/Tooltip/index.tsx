import React from 'react';

import {Container} from './styles';

interface TooltipoProps{
    title : string,
    className? : string; 
}

const Tooltipo : React.FC<TooltipoProps> = ({title, children, className}) => {

    return (
        <Container className={className}>
            {children}
            
    <span>{title}</span>
        </Container>
    );

};

export default Tooltipo;