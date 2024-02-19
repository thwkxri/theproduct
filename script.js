function startTest() {
  document.querySelector('.questions').style.display = 'block';
}

function web_test() {
  let score = 0;
  if (document.getElementsByName('q1')[0].checked) {
    score++;
  }
  if (document.getElementsByName('q2')[2].checked) {
    score++;
  }
  if (document.getElementsByName('q3')[1].checked) {
    score++;
  }
  if (document.getElementsByName('q4')[2].checked) {
    score++;
  }
  if (document.getElementsByName('q5')[2].checked) {
    score++;
  }
  if (document.getElementsByName('q6')[0].checked) {
    score++;
  }
  if (document.getElementsByName('q7')[0].checked) {
    score++;
  }
  if (document.getElementsByName('q8')[3].checked) {
    score++;
  }
  if (document.getElementsByName('q9')[3].checked) {
    score++;
  }
  if (document.getElementsByName('q10')[0].checked) {
    score++;
  }
  document.getElementById('score').textContent = `Правильных ответов:  ${score}/10`;
}