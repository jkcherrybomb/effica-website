import React, {FunctionComponent, useContext} from 'react';
import {useRouter} from 'next/router';

export const Localized: FunctionComponent<{lang: string}> = (props) => {
    const lang = useRouter().locale; //(LanguageContext);

    return lang == props.lang ? <>{props.children}</> : <></>;
};
