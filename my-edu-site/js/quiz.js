const answers = { q1:'8', q2:'1/2', q3:'1/2' };

document.getElementById('quizForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  let score = 0;
  for (const [name, value] of data.entries()) {
    if (answers[name] === value) score++;
  }
  const total = Object.keys(answers).length;
  document.getElementById('result').textContent =
    `You got ${score} / ${total} correct. ${score===total ? 'Great job!' : 'Try again?'}`;
});