import React, { useEffect } from 'react'

function QuestionsList({formData}) {
    useEffect(()=>{
        if(formData){
            GenerateQuestionList()
        }
    },[formData])

    const GenerateQuestionList = () => {}

  return (
    <div>QuestionsList</div>
  )
}

export default QuestionsList