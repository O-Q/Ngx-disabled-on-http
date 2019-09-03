# NgxDisabledOnHttp

A library when click event sends HTTP request, disable tag until gets response.

## Example:

### template:

```html
<button [NgxDisabledOnHttp]="url" (click)="onButtonClicked()">click me!</button>
```

### module:

```typescript
imports: [
  ...,
  NgxDisabledOnHttpModule.register(BASE_URL)
];
```
#### Note: "BASE_URL" is like: `https://example.com`
