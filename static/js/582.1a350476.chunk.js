"use strict";(self.webpackChunkreact_covid_tracker=self.webpackChunkreact_covid_tracker||[]).push([[582],{405:function(a,e,s){s.r(e),s.d(e,{default:function(){return f}});var t=s(791),n=s(434),r=s(664),c=s(355),i=s(184);function m(){var a=(0,n.v9)((function(a){return a.allTime}));return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"dashboard",children:[(0,i.jsxs)("div",{className:"stat",children:[(0,i.jsx)("span",{className:"stat__number",children:new Intl.NumberFormat("en").format(a.active)}),(0,i.jsx)("br",{}),"active cases"]}),(0,i.jsxs)("div",{className:"stat",children:[(0,i.jsx)("span",{className:"stat__number",children:new Intl.NumberFormat("en").format(a.todayCases)}),(0,i.jsx)("br",{}),"today cases"]}),(0,i.jsxs)("div",{className:"stat",children:[(0,i.jsx)("span",{className:"stat__number",children:new Intl.NumberFormat("en").format(a.todayDeaths)}),(0,i.jsx)("br",{}),"today deaths"]}),(0,i.jsxs)("div",{className:"stat",children:[(0,i.jsx)("span",{className:"stat__number",children:new Intl.NumberFormat("en").format(a.totalCases)}),(0,i.jsx)("br",{}),"total cases"]}),(0,i.jsxs)("div",{className:"stat",children:[(0,i.jsx)("span",{className:"stat__number",children:new Intl.NumberFormat("en").format(a.totalDeaths)}),(0,i.jsx)("br",{}),"total deaths"]}),(0,i.jsxs)("div",{className:"stat",children:[(0,i.jsx)("span",{className:"stat__number",children:new Intl.NumberFormat("en").format(a.totalTests)}),(0,i.jsx)("br",{}),"total tests"]})]})})}var l=s(504),o=s(205),d=s(718),u=s(678),j=s(486),p=s(195),x=s(722);var h=s.p+"static/media/arrow-right.e78d29f933a7aae631e5c8f16292eb3e.svg";function N(a){var e=a.continent,s=e.name,t=e.active;return(0,i.jsxs)("div",{children:[function(){switch(s){case"Asia":return(0,i.jsx)("img",{className:"mapImg",src:d.Z,alt:"Continent Map"});case"North America":return(0,i.jsx)("img",{className:"mapImg",src:j.Z,alt:"Continent Map"});case"South America":return(0,i.jsx)("img",{className:"mapImg",src:x.Z,alt:"Continent Map"});case"Europe":return(0,i.jsx)("img",{className:"mapImg",src:u.Z,alt:"Continent Map"});case"Australia-Oceania":return(0,i.jsx)("img",{className:"mapImg",src:p.Z,alt:"Continent Map"});case"Africa":return(0,i.jsx)("img",{className:"mapImg",src:o.Z,alt:"Continent Map"});default:return null}}(),(0,i.jsxs)("span",{className:"info",children:[(0,i.jsx)("p",{className:"name",children:s}),(0,i.jsx)("p",{className:"number",children:new Intl.NumberFormat("en").format(t)}),(0,i.jsx)(l.rU,{to:"/".concat(s),children:(0,i.jsx)("img",{className:"arrow",src:h,alt:"Arrow"})})]})]})}N.defaultProps={continent:{name:"",active:0}};var v=s(782);var f=function(){var a=(0,n.I0)(),e=(0,n.v9)((function(a){return a.continents}));return(0,t.useEffect)((function(){a((0,r.W)()).then(a((0,c.P)()))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.Z,{pageTo:"Home"}),(0,i.jsx)("div",{className:"mapDiv",children:(0,i.jsx)("iframe",{className:"map",title:"covid map",src:"https://coronavirus.app/map?embed=true",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,i.jsx)("h2",{className:"title",children:"ALL TIME STATS"}),(0,i.jsx)(m,{}),(0,i.jsx)("h2",{className:"title",children:"STATS BY CONTINENT"}),(0,i.jsx)("div",{className:"continents",children:e.map((function(a){return(0,i.jsx)(N,{continent:a},a.id)}))})]})}}}]);
//# sourceMappingURL=582.1a350476.chunk.js.map