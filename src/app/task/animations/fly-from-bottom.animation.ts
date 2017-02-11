import { trigger, state, style, transition, animate } from '@angular/core';

export const FlyInFromBottomAnimation = function(hiddenOffset: number){
    return trigger(`flyInFromBottom`, [
        state(`void`, style({ transform: `translateY(${hiddenOffset}px) ` })),
        state(`show`, style({ transform: `translateY(0)` })),
        transition(`void => show`, animate(`0.5s 0s ease-out`)),
        transition(`show => void`, animate(`0.5s 0s ease-in`))
    ]);
}