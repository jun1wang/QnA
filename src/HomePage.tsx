import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      console.log(
        '* unansweredQuestions.length = ' + unansweredQuestions.length,
      );
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);
  const [questionsLoading, setQuestionsLoading] = React.useState(true);

  const handleAskQuestionClicked = () => {
    console.log('TODO');
  };

  return (
    <Page>
      <div>
        <div>
          <PageTitle>Unanswered Questions</PageTitle>
          <button onClick={handleAskQuestionClicked}>Ask a question</button>
        </div>
        {questionsLoading ? (
          <div>Loading... </div>
        ) : (
          <QuestionList data={questions || []} />
        )}
      </div>
    </Page>
  );
};
