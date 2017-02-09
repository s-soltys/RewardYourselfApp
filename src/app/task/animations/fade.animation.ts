import { trigger, state, style, transition, animate } from '@angular/core';

export const FadeAnimation = function(time: number){
    return trigger(`fade`, [
        state(`void`, style({ opacity: 0.25, filter: 'blur(4px) contrast(90%)' })),
        state(`show`, style({ opacity: 1, filter: 'blur(0px) contrast(100%)' })),
        transition(`void => show`, animate(`${time}s 0s ease-out`)),
        transition(`show => void`, animate(`${time}s 0s ease-in`))
    ]);
}