import { useEffect, useRef } from "react";

export const useInterserctionObserver = (fetchNextPage) => {
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // SPA문제의 한계, 이전 라우터의 스크롤을 기억하고 있는 문제를 해결하고자 함
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchNextPage()
      }
    }, { threshold: 0.01 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return {ref}
}