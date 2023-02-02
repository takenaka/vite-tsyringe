import 'reflect-metadata';
import { container } from 'tsyringe';
import { Config } from '@/package/config';
import { Greeter, greeterSymbol } from '@/package/greeter';
import type { IGreeter } from '@/package/greeter';

import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

const app = createApp(App);

container.register('Config', { useValue: new Config('John') });
container.register('Greeter', { useClass: Greeter });

const greeter = container.resolve<IGreeter>('Greeter');

app.provide(greeterSymbol, greeter);

app.mount('#app');
