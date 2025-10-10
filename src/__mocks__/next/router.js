// __mocks__/next/router.js

export const useRouter = () => {
  return {
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    basePath: "",
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    beforePopState: jest.fn(),
    isFallback: false,
    isReady: true,
    isPreview: false,
  };
};
