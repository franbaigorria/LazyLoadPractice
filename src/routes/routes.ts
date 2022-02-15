import { lazy, LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

interface IRoute {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(()=> import (/*webpackChunkName: "LazyPage1" */ '../../src/lazyLoad/pages/LazyPage1'))
const Lazy2 = lazy(()=> import (/*webpackChunkName: "LazyPage2" */'../../src/lazyLoad/pages/LazyPage2'))
const Lazy3 = lazy(()=> import (/*webpackChunkName: "LazyPage3" */'../../src/lazyLoad/pages/LazyPage3'))

export const routes: IRoute[] = [ 
    {
        to:'/lazy1',
        path: 'lazy1',
        Component: Lazy1, 
        name: 'Lazy-1'
    },
    {
        to:'/lazy2',
        path: 'lazy2',
        Component: Lazy2, 
        name: 'Lazy-2'
    },
    {
        to:'/lazy3',
        path: 'lazy3',
        Component: Lazy3, 
        name: 'Lazy-3'
    }
]