'use client';

import React from 'react';
import classNames from '../lib/classNames';
import Wrapper from './Wrapper';
import WrapperTag from './WrapperTag';
import Icon from './Icon';

/**
 * @param {ScotGov.Component.SnackBar} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SnackBar:React.FC<ScotGov.Component.SnackBar> = function SnackBar({
    text = 'alpha',
    className,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_snackbar',
                className,
            )}
            {...props}
        >
            <Wrapper>
                <div className="ds_snackbar__content">
                    <span>{text}</span>
                    <Icon icon="close" />
                </div>
            </Wrapper>
        </WrapperTag>
    );
};

export default SnackBar;
