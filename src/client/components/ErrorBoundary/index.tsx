import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error.message);
    // @ts-ignore
    this.state.a = error.message;
    this.setState({ hasError: true });
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      // @ts-ignore
      return <h1>{this.state.a || "Something went wrong."}</h1>;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
