import { ElementRef } from '@angular/core';
import { HighlightDirective } from './apphighlight.directive';

describe('ApphighlightDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef({});
    const directive = new HighlightDirective(el);
    expect(directive).toBeTruthy();
  });
});
