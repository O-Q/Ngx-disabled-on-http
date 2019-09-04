A library when click event sends HTTP request, disable tag until gets response.

## Insatll

`npm install ngx-disabled-on-http`

## Usage:

### template:

```html
<button [NgxDisabledOnHttp]="url" (click)="onButtonClicked()">click me!</button>
```
#### Note: "url" must be something like: `${BASE_URL}/facts` or only `/facts`.

### module:

```typescript
imports: [
  ...,
  NgxDisabledOnHttpModule.register(BASE_URL)
];
```
#### Note: "BASE_URL" is like: `https://example.com`

## Example:

[Clone repository](https://github.com/O-Q/Ngx-disabled-on-http.git) and serve
