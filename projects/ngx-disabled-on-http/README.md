# NgxDisabledOnHttp

A library when click event sends HTTP request, disables tag until client gets response.

## Usage:

### template:

```html
<button [NgxDisabledOnHttp]="url" (click)="onButtonClicked()">Get Facts</button>
```

### module:

```typescript
imports: [
  ...,
  NgxDisabledOnHttpModule
];
```

## Example:

See [this](https://o-q.github.io/Ngx-disabled-on-http/) or [Clone repository](https://github.com/O-Q/Ngx-disabled-on-http.git) and serve
