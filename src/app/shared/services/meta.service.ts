import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private meta: Meta, private title: Title) {}

  updateMeta(title: string, description: string, imgUrl: string, url: string) {
    this.meta.updateTag({ name: 'title', content: title });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:image',
      content: `https://ssr-demo-f38a9.web.app/assets/img/${imgUrl}`,
    });
    this.meta.updateTag({
      property: 'og:url',
      content: `https://ssr-demo-f38a9.web.app/${url}`,
    });
    this.title.setTitle(title);
  }
}
