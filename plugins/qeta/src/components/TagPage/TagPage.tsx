import React from 'react';
import { Content, ContentHeader } from '@backstage/core-components';
import { useParams } from 'react-router-dom';
// @ts-ignore
import RelativeTime from 'react-relative-time';
import { QuestionsContainer } from '../QuestionsContainer/QuestionsContainer';
import { TagsContainer } from './TagsContainer';
import { AskQuestionButton } from '../Buttons/AskQuestionButton';
import { Container } from '@material-ui/core';
import { BackToQuestionsButton } from '../Buttons/BackToQuestionsButton';

export const TagPage = () => {
  const { tag } = useParams();
  return (
    <Content>
      <Container maxWidth="lg">
        <ContentHeader title={tag ? `Questions tagged [${tag}]` : 'Tags'}>
          <BackToQuestionsButton />
          <AskQuestionButton />
        </ContentHeader>
        {tag ? <QuestionsContainer tags={[tag ?? '']} /> : <TagsContainer />}
      </Container>
    </Content>
  );
};
