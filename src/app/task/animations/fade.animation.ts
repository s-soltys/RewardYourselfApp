import { trigger, state, style, transition, animate } from '@angular/core';

export const FadeAnimation = function(time: number){
    return trigger(`fade`, [
        state(`void`, style({ opacity: 0.25, filter: 'blur(4px)' })),
        state(`show`, style({ opacity: 1, filter: 'blur(0px)' })),
        transition(`void => show`, animate(`${time}s`)),
        transition(`show => void`, animate(`${time}s`))
    ]);
}