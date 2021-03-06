import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing, appRoutingProviders }  from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { SortablejsModule } from 'angular-sortablejs';
import { SignInComponent } from './signin.component';
import { SignUpComponent } from './signup.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard.component';
import { PersonaComponent } from './persona.component';
import { ViewPersonaComponent } from './view.persona.component';
import { newPersonaComponent } from './newPersona.component';
import { GridBlock } from './gridBlock.component';
import { TextModule } from './text_module/text.module';
import { ViewTextModule } from './text_module/view.text.module'
import { ImageModule } from './image_module/image.module';
import { ViewImageModule } from './image_module/view.image.module';
import { BarGraphModule } from './bar_graph_module/bar-graph.module';
import { ViewBarGraphModule } from './bar_graph_module/view.bar-graph.module';
import { SocialMediaModule } from './social_media_module/social-media.module';
import { ViewSocialMediaModule } from './social_media_module/view.social-media.module';
import { TagModule } from './tag_module/tag.module';
import { ViewTagModule } from './tag_module/view.tag.module';
import { EmailModule } from './email_module/email.module';
import { ViewEmailModule } from './email_module/view.email.module';
import { EmbedModule } from './embed_module/embed.module';
import { ViewEmbedModule } from './embed_module/view.embed.module';
import { ScaleChartModule } from './scale_chart_module/scale-chart.module';
import { ViewScaleChartModule } from './scale_chart_module/view.scale-chart.module';
import { PieChartModule } from './pie_chart_module/pie-chart.module';
import { ViewPieChartModule } from './pie_chart_module/view.pie-chart.module';
import { AccordionModule } from './accordion_module/accordion.module';
import { ViewAccordionModule } from './accordion_module/view.accordion.module';
import { TabsModule } from './tabs_module/tabs.module';
import { ViewTabsModule } from './tabs_module/view.tabs.module';
import { DevicesPlatformsModule } from './devicesPlatforms_module/devices-platforms.module';
import { ViewDevicesPlatformsModule } from './devicesPlatforms_module/view.devices-platforms.module';
import { AboutModule } from './about_module/about.module';
import { ViewAboutModule } from './about_module/view.about.module';
import { CountingModule } from './counting_module/counting.module';
import { ViewCountingModule } from './counting_module/view.counting.module';
import { colorSchemeModule } from './colorScheme_component/colorScheme.module';
import { bgColorModule } from './bgColor_component/bgColor.module';

@NgModule({
    imports: [
        BrowserModule,
        DndModule.forRoot(),
        routing,
        HttpModule,
        JsonpModule,
        FormsModule,
        SortablejsModule
    ],
    declarations: [
        AppComponent,
        SignInComponent,
        SignUpComponent,
        HomeComponent,
        DashboardComponent,
        PersonaComponent,
        newPersonaComponent,
        ViewPersonaComponent,
        GridBlock,
        TextModule,
        ViewTextModule,
        ImageModule,
        ViewImageModule,
        BarGraphModule,
        ViewBarGraphModule,
        SocialMediaModule,
        ViewSocialMediaModule,
        TagModule,
        ViewTagModule,
        EmailModule,
        ViewEmailModule,
        EmbedModule,
        ViewEmbedModule,
        ScaleChartModule,
        ViewScaleChartModule,
        PieChartModule,
        ViewPieChartModule,
        AccordionModule,
        ViewAccordionModule,
        TabsModule,
        ViewTabsModule,
        DevicesPlatformsModule,
        ViewDevicesPlatformsModule,
        AboutModule,
        ViewAboutModule,
        CountingModule,
        ViewCountingModule,
        colorSchemeModule,
        bgColorModule
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
