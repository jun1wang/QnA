using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QnA.Data.Models;

namespace QnA.Data
{
    public interface IQuestionCache
    {
        QuestionGetSingleResponse Get(int questionId);
        void Remove(int questionId);
        void Set(QuestionGetSingleResponse question);
    }
}

