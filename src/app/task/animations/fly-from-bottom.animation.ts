import { trigger, state, style, transition, animate } from '@angular/core';

export const FlyInFromBottomAnimation = function(hiddenOffset: number){
    return trigger(`flyInFromBottom`, [
        state(`void`, style({ transform: `translate(${hiddenOffset}px, ${hiddenOffset}px) scale(1.5)` })),
        state(`show`, style({ transform: `translate(0, 0) scale(1)` })),
        transition(`void => show`, animate(`0.5s 0s cubic-bezier(0.075, 0.82, 0.165, 1)`)),
        transition(`show => void`, animate(`0.5s 0s ease-in`))
    ]);
}