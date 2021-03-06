import { ReactElement, FC } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { PageNotFound } from '../404/PageNotFound';
import routes from './routes.json';
import HomeLayout from '../../layouts/home/HomeLayout';

interface HomeParams {
    baseUrl: string;
}

export const HomePage: FC<HomeParams> = ({ baseUrl }): ReactElement => {
    const DEFAULT_SECTION = 'most-recent';

    return (
        <Switch>
            <Route exact path={baseUrl}>
                <Redirect to={`${baseUrl}/${DEFAULT_SECTION}`} />
            </Route>
            {routes.map(({ url }, i) => (
                <Route exact path={`${baseUrl}${url}`} key={i}>
                    <HomeLayout />
                </Route>
            ))}
            <Route component={PageNotFound} />
        </Switch>
    );
};
