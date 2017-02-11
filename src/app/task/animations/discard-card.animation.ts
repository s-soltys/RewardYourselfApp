import { trigger, state, style, transition, animate } from '@angular/core';

export const DiscardCardAnimation = function(){
    return trigger(`discardCard`, [
        state(`show`, style({ opacity: 1, transform: `scale(1)`, filter: 'blur(0)' })),
        state(`void`, style({ opacity: 0, transform: `scale(0.75)`, filter: 'blur(3px)' })),
        transition(`show => void`, animate(`0.5s 0s ease-out`))
    ]);
}