"use strict";
var router_1 = require("@angular/router");
var signin_component_1 = require("./signin.component");
var signup_component_1 = require("./signup.component");
var home_component_1 = require("./home.component");
var dashboard_component_1 = require("./dashboard.component");
var persona_component_1 = require("./persona.component");
var newPersona_component_1 = require("./newPersona.component");
var view_persona_component_1 = require("./view.persona.component");
var appRoutes = [
    { path: 'signin', component: signin_component_1.SignInComponent },
    { path: 'signup', component: signup_component_1.SignUpComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'edit/:author_id/:project_type/:project_id/:project_name', component: persona_component_1.PersonaComponent },
    { path: 'view/:author_id/:project_type/:project_id/:project_name', component: view_persona_component_1.ViewPersonaComponent },
    { path: 'new/persona/:author_id', component: newPersona_component_1.newPersonaComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map