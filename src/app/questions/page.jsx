import Image from 'next/image';
import data from './data.json';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import styles from './page.module.css';

export default function QuestionsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h2>Вопросы-ответы</h2>
      </div>
      {data.map(({ id, question, answer }) => (
        <QuestionCard
          key={id}
          question={question}
          answer={answer}
          className={styles.questionCard}
        />
      ))}
    </main>
  );
}
