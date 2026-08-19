function BackToTop({ scrollRef, scrollState }) {
  const visible = scrollState.scroll > 550;
  const goTop = () => scrollRef.current?.scrollTo(0, { duration: 0.7 });
  return <button className={`back-top${visible ? " is-visible" : ""}`} type="button" onClick={goTop} aria-label="Back to top">↑</button>;
}
export default BackToTop;
