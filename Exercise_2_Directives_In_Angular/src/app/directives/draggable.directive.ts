import { Directive ,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

}
