"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var ng2_dnd_1 = require('ng2-dnd');
var signin_component_1 = require('./signin.component');
var signup_component_1 = require('./signup.component');
var home_component_1 = require('./home.component');
var dashboard_component_1 = require('./dashboard.component');
var persona_component_1 = require('./persona.component');
var view_persona_component_1 = require('./view.persona.component');
var newPersona_component_1 = require('./newPersona.component');
var gridBlock_component_1 = require('./gridBlock.component');
var text_module_1 = require('./text_module/text.module');
var view_text_module_1 = require('./text_module/view.text.module');
var image_module_1 = require('./image_module/image.module');
var view_image_module_1 = require('./image_module/view.image.module');
var bar_graph_module_1 = require('./bar_graph_module/bar-graph.module');
var view_bar_graph_module_1 = require('./bar_graph_module/view.bar-graph.module');
var social_media_module_1 = require('./social_media_module/social-media.module');
var view_social_media_module_1 = require('./social_media_module/view.social-media.module');
var tag_module_1 = require('./tag_module/tag.module');
var view_tag_module_1 = require('./tag_module/view.tag.module');
var email_module_1 = require('./email_module/email.module');
var view_email_module_1 = require('./email_module/view.email.module');
var embed_module_1 = require('./embed_module/embed.module');
var view_embed_module_1 = require('./embed_module/view.embed.module');
var scale_chart_module_1 = require('./scale_chart_module/scale-chart.module');
var view_scale_chart_module_1 = require('./scale_chart_module/view.scale-chart.module');
var pie_chart_module_1 = require('./pie_chart_module/pie-chart.module');
var view_pie_chart_module_1 = require('./pie_chart_module/view.pie-chart.module');
var accordion_module_1 = require('./accordion_module/accordion.module');
var view_accordion_module_1 = require('./accordion_module/view.accordion.module');
var tabs_module_1 = require('./tabs_module/tabs.module');
var view_tabs_module_1 = require('./tabs_module/view.tabs.module');
var devices_platforms_module_1 = require('./devicesPlatforms_module/devices-platforms.module');
var view_devices_platforms_module_1 = require('./devicesPlatforms_module/view.devices-platforms.module');
var about_module_1 = require('./about_module/about.module');
var view_about_module_1 = require('./about_module/view.about.module');
var counting_module_1 = require('./counting_module/counting.module');
var view_counting_module_1 = require('./counting_module/view.counting.module');
var colorScheme_module_1 = require('./colorScheme_component/colorScheme.module');
var bgColor_module_1 = require('./bgColor_component/bgColor.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_dnd_1.DndModule.forRoot(),
                app_routing_1.routing,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                signin_component_1.SignInComponent,
                signup_component_1.SignUpComponent,
                home_component_1.HomeComponent,
                dashboard_component_1.DashboardComponent,
                persona_component_1.PersonaComponent,
                newPersona_component_1.newPersonaComponent,
                view_persona_component_1.ViewPersonaComponent,
                gridBlock_component_1.GridBlock,
                text_module_1.TextModule,
                view_text_module_1.ViewTextModule,
                image_module_1.ImageModule,
                view_image_module_1.ViewImageModule,
                bar_graph_module_1.BarGraphModule,
                view_bar_graph_module_1.ViewBarGraphModule,
                social_media_module_1.SocialMediaModule,
                view_social_media_module_1.ViewSocialMediaModule,
                tag_module_1.TagModule,
                view_tag_module_1.ViewTagModule,
                email_module_1.EmailModule,
                view_email_module_1.ViewEmailModule,
                embed_module_1.EmbedModule,
                view_embed_module_1.ViewEmbedModule,
                scale_chart_module_1.ScaleChartModule,
                view_scale_chart_module_1.ViewScaleChartModule,
                pie_chart_module_1.PieChartModule,
                view_pie_chart_module_1.ViewPieChartModule,
                accordion_module_1.AccordionModule,
                view_accordion_module_1.ViewAccordionModule,
                tabs_module_1.TabsModule,
                view_tabs_module_1.ViewTabsModule,
                devices_platforms_module_1.DevicesPlatformsModule,
                view_devices_platforms_module_1.ViewDevicesPlatformsModule,
                about_module_1.AboutModule,
                view_about_module_1.ViewAboutModule,
                counting_module_1.CountingModule,
                view_counting_module_1.ViewCountingModule,
                colorScheme_module_1.colorSchemeModule,
                bgColor_module_1.bgColorModule
            ],
            providers: [
                app_routing_1.appRoutingProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map