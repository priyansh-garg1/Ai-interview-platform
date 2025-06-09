import axios from "axios";
import { Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function QuestionsList({ formData }) {
  const [loading, setLoading] = useState(true);
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    if (formData) {
      // GenerateQuestionList();
    }
  }, [formData]);

  const GenerateQuestionList = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/ai-model", {
        ...formData,
      });

      console.log(result.data.content);
      const Content = result.data.content;
      const FinalContent = Content.replace("```json", "").replace("```", "");
      setQuestionsList(JSON.parse(FinalContent)?.interviewQuestions);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast("Something went wrong.");
    }
  };

  return (
    <div>
      {loading && (
        <div className="p-5 bg-purple-100 rounded-2xl border border-primary flex items-center gap-5">
          <Loader2Icon className="animate-spin" />
          <div className="">
            <h2 className="font-medium">Generating Interview Questions</h2>
            <p className="text-primary">
              AI is crafting persenalized questions. According to your job
              description
            </p>
          </div>
        </div>
      )}
      {
        questionsList.length>0 && <div className="p-5 border border-gray-400 rounded-xl bg-white">
          {
            questionsList.map((item,index) => (
              <div key={index} className="p-3 bg-white rounded-2xl border border-gray-200 gap-3 mb-5">
                <h2 className="font-medium">{item.question}</h2>
                <h2 className="text-sm text-primary">Type: {item?.type}</h2>
              </div>
            ))
          }
        </div>
      }
    </div>
  );
}

export default QuestionsList;
