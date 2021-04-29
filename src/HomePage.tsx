/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { Footer } from './Footer';
import { PrimaryButton } from './Styles';

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
      <div css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            `}
        >
          <PageTitle>Unanswered Questions</PageTitle>
          <PrimaryButton onClick={handleAskQuestionClicked}>
            Ask a question
          </PrimaryButton>
        </div>
        {questionsLoading ? (
          <div>Loading... </div>
        ) : (
          <QuestionList data={questions || []} />
        )}
      <div>
        <Footer />
      </div>
    </Page>
  );
};
