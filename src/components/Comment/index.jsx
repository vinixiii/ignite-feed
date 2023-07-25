import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/vinixiii.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinícius Figueiroa</strong>
              <time
                dateTime="2022-05-11 08:13:30"
                title="11 de Maio de 2022 às 08:13h"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
