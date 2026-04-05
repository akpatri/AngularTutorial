import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CollapseNavbar } from "./collapse-navbar/collapse-navbar";
import { LowerCasePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLinkWithHref, CollapseNavbar, TitleCasePipe, LowerCasePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  content:{subject:string, contents:string[]}[]=[
    {subject: "Signal", contents: ["signal1", "signal2"]},
    {subject: "Component", contents: ["communication", "Selectors", "Lifecycle"]},
    {subject: "Templates", contents: ["Binding", "controlflow","pipes"]},
    {subject: "Directives", contents: ["Attribute", "Structural"]},
    {subject: "DependencyInjection", contents: ["DependencyProviders", "ProviderHierarchy"]},
    {subject: "Routing", contents: ["Routing1", "Routing2"]},
    {subject: "Forms", contents: ["TemplateForm", "ReactiveForm", "SignalForm", "Validation"]},
    {subject: "HttpClient", contents: ["HttpClient1", "HttpClient2"]}
  ];
}
