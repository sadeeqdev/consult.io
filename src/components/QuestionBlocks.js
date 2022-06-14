import { styled } from '@mui/system'
import React from 'react'

const QuestionBlock = ({question, answer}) => {

    const StyledMainBody = styled('div')(({theme}) => ({
        marginTop:'80px',
        width:'50%',
        margin:'30px auto',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        fontSize:'24px'
    }))

    const StyledQuestionBlock = styled('div')(({theme}) => ({
        width:'auto',
        height:'auto',
        borderLeft:'5px solid #07163a',
        padding:'15px',
        color:'#333333',
        backgroundColor:'#f3f3f3'
    }))


    const StyledAnswerBlock = styled('div')(({theme}) => ({
        width:'auto',
        height:'auto',
        borderLeft:'5px solid #74a3ee',
        padding:'15px',
        fontSize:'18px',
        color:'#444444'
    }))

    return (
        <StyledMainBody>
            <StyledQuestionBlock>
                {question}
            </StyledQuestionBlock>
            <StyledAnswerBlock>
                {answer}
            </StyledAnswerBlock>
        </StyledMainBody>
    )
}

export default QuestionBlock