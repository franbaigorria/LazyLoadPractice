import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../lazyLoad/pages/NoLazy'

type JSXComponent = () => JSX.Element

interface IRoute {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(()=> import (/*webpackChunkName: "Lazy-layout" */ '../lazyLoad/layout/LazyLayout'))
// const Lazy2 = lazy(()=> import (/*webpackChunkName: "LazyPage2" */'../../src/lazyLoad/pages/LazyPage2'))
// const Lazy3 = lazy(()=> import (/*webpackChunkName: "LazyPage3" */'../../src/lazyLoad/pages/LazyPage3'))

export const routes: IRoute[] = [ 
    {
        to:'/lazyLayout',
        path: 'lazyLayout/*',
        Component: LazyLayout, 
        name: 'Lazy-Layout'
    },
    {
        to:'/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,  
        name: 'No lazy'
    },
    // {
    //     to:'/lazy3',
    //     path: 'lazy3',
    //     Component: Lazy3, 
    //     name: 'Lazy-3'
    // }
]