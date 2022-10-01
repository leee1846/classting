export function msToKorTime(milliseconds) {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

  if (hours && minutes && seconds) {
    return `${hours}시간 ${minutes}분 ${seconds}초`;
  }
  if (minutes && seconds) {
    return `${minutes}분 ${seconds}초`;
  }
  return `${seconds}초`;
}
