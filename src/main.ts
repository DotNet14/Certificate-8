import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Doc } from './app/doc/doc';

bootstrapApplication(Doc, appConfig)
  .catch((err) => console.error(err));
