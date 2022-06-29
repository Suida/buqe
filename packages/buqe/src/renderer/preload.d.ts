declare global {
  interface Window {
    electron: {
      setTitle(title: string): void,
    }
  }
}

export {};
