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
import { Dependencyproviders } from './dependency-injection/dependencyproviders/dependencyproviders';
import { ProviderHierarchy } from './dependency-injection/provider-hierarchy/provider-hierarchy';
import { TemplateForm } from './form/template-form/template-form';
import { ReactiveForm } from './form/reactive-form/reactive-form';
import { SignalForm } from './form/signal-form/signal-form';


export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [

      {
        path: 'forms',
        component: Form,
        outlet: 'render',
        children:[
          {
            path:'templateform',
            component:TemplateForm
          },
          {
            path:'reactiveform',
            component:ReactiveForm
          },
          {
            path:'signalform',
            component:SignalForm
          }
        ]
      },
      {
        path: 'dependencyinjection',
        component: DependencyInjection,
        outlet: 'render',
        children: [
          {
            path: 'dependencyproviders',
            component: Dependencyproviders
          },
          {
            path:'providerhierarchy',
            component:ProviderHierarchy
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
