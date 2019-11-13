import * as fromRouter from '@app/root/store/reducers';

export const routerMockState: {
  navigationId: number;
  state: fromRouter.RouterStateUrl;
} = {
  navigationId: 1,
  state: {
    params: { key: '1' },
    paths: ['path1', 'subpath1'],
    title: 'The title',
    queryParams: {
      term: 'smells',
    },
    url: 'path1/subpath1',
    currentPage: 'subpath1',
  },
};
