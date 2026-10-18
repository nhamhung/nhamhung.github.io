import { Component } from "react";
import type { ReactNode } from "react";
export default class TalkRouteBoundary extends Component<
  { children: ReactNode; onExit: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <section
        lang="vi"
        style={{
          minHeight: "100vh",
          padding: 40,
          background: "#f6f8f3",
          color: "#19354a",
          fontFamily: "system-ui",
        }}
      >
        <h1>Chưa thể mở bài chia sẻ.</h1>
        <p>Hãy tải lại trang để thử lại, hoặc quay về portfolio.</p>
        <button
          data-testid="talk-error-reload"
          onClick={() => window.location.reload()}
        >
          Tải lại trang
        </button>{" "}
        <button data-testid="talk-error-exit" onClick={this.props.onExit}>
          Về portfolio
        </button>
      </section>
    );
  }
}
