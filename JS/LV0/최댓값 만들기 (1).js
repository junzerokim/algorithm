// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = 0;
  numbers.sort((a, b) => {
    return a - b;
  });
  answer = numbers[numbers.length - 2] * numbers[numbers.length - 1];
  return answer;
}
