import styled, {css} from 'styled-components';
import Tooltipo from '../Tooltip'

interface ContainerProps {
    isFocused : boolean,
    isFilled : boolean,
    isError: boolean;
}

export const Container = styled.div<ContainerProps>`

    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #f4ede8;

    display: flex;
    align-items: center;

    ${props => props.isError && css`
    border-color: #c53030;
    `}

    ${props => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
    `}

    ${props => props.isFilled && css`
    color: #ff9000;
    `}

    & + div {
                margin-top: 8px;
    }
    
    input{
        color: #f4ede8;
           flex: 1;
           background: transparent;
           border: 0;

           
    }

    svg {
        margin-right: 16px;
    }

`;

export const Error = styled(Tooltipo)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0px;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }

    }

`;