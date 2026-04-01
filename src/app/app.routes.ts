import { Routes, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Communication } from './component/communication/communication';
import { Form } from './form/form';
import { Selector } from './component/selector/selector';
import { ComponentDemo } from './component/component';
import { Lifecycle } from './component/lifecycle/lifecycle';
import { Template } from './template/template';
import { Binding } from './template/binding/binding';
import { Controlflow } from './template/controlflow/controlflow';
import { Pipes } from './template/pipesAndVariable/pipes';
import { Directives } from './directives/directives';
import { Attribute } from './directives/attribute/attribute';
import { Structural } from './directives/structural/structural';
import { DependencyInjection } from './dependency-injection/dependency-injection';
import { Services } from './dependency-injection/services/services';


export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [

      {
        path: 'basic',
        component: Form,
        outlet: 'render'

      },
      {
        path: 'dependencyinjection',
        component: DependencyInjection,
        outlet: 'render',
        children: [
          {
            path: 'services',
            component: Services
          },

        ]
      },
      {
        path: 'directives',
        component: Directives,
        outlet: 'render',
        children: [
          {
            path: 'attribute',
            component: Attribute
          },

          {
            path: 'structural',
            component: Structural
          }
        ]
      },
      {
        path: 'templates',
        component: Template,
        outlet: 'render',
        children: [
          {
            path: 'binding',
            component: Binding,
          },
          {
            path: 'controlflow',
            component: Controlflow
          },
          {
            path: 'pipes',
            component: Pipes
          }
        ]
      },
      {
        path: 'component',
        component: ComponentDemo,
        outlet: 'render',
        children: [
          {
            path: 'selectors',
            component: Selector,
          },
          {
            path: 'communication',
            component: Communication,
          },
          {
            path: 'lifecycle',
            component: Lifecycle,
          }
        ]
      }
    ]
  },


];
