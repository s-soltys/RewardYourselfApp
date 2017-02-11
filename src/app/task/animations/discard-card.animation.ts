import { trigger, state, style, transition, animate } from '@angular/core';

export const DiscardCardAnimation = function(){
    return trigger(`discardCard`, [
        state(`show`, style({ opacity: 1, transform: `translateX(0)`, filter: 'blur(0)' })),
        state(`void`, style({ opacity: 0, transform: `translateX(100px)`, filter: 'blur(3px)' })),
        transition(`show => void`, animate(`0.5s 0s ease-out`))
    ]);
}