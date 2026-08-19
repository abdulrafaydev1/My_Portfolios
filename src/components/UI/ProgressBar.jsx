function ProgressBar({ scrollState }) {
  const normalizedProgress = scrollState.progress <= 1 ? scrollState.progress * 100 : scrollState.progress;
  return <span className="progress-bar" style={{ width: `${normalizedProgress}%` }} />;
}
export default ProgressBar;
