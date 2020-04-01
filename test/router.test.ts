import createRouter from '../src/router';
import Routes from '../src/routes';

describe('router', (): void => {
  it.each(Object.values(Routes))('has a route named %s', async (name: string): Promise<void> => {
    const router = createRouter();

    expect(router.route(name)).toMatchObject({ name });
  });
});