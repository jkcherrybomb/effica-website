import React, {FunctionComponent, useState} from 'react';
import styled from 'styled-components';
import {EfficaStyleArgument} from '../styles/theme';
import Link from 'next/link';
import Center from './central/Center';
import {addProps} from '../utils/ComponentUtils';
import {Localized} from '../contexts/LanguageContext';

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 54px;
    padding: 7px;
    background-color: #fff;
    z-index: 100;
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
    width: 100vw;
`;

const Burger = styled.button`
    display: none;
    ${(p: EfficaStyleArgument) => p.theme.down(p.theme.breakpoint.mobile)} {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-right: 20px;
    }
    background: url('/images/burger.svg') no-repeat center;
    background-color: white;
    border: 0;
    cursor: pointer;
    :hover {
        opacity: 0.9;
    }
`;

const Logo = styled.img`
    height: 35px;
    :hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

const LinksWrapper = styled(addProps<{open: boolean}>()(styled.div``))`
    float: right;
    transition: transform 1s;
    ${(p: EfficaStyleArgument) => p.theme.down(p.theme.breakpoint.mobile)} {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        left: 90px;
        bottom: 0;
        padding: 20px;
        transform: translateX(${(p) => (p.open ? '0' : '100%')});
        background-color: white;
        text-align: center;
    }
`;

const HeaderLink = styled.a`
    display: inline-block;
    line-height: 20px;
    margin: 10px;
    min-width: 150px;
    ${(p: EfficaStyleArgument) => p.theme.down(p.theme.breakpoint.mobile)} {
        width: 100%;
        min-width: unset;
        margin-left: 0;
        margin-right: 0;
    }

    text-align: center;
`;

const Navbar: FunctionComponent = () => {
    const [open, setOpen] = useState(false);

    return (
        <HeaderWrapper>
            <Center>
                <Burger
                    onClick={() => setOpen(!open)}
                    aria-label={'Open menu'}
                />
                <Link href={'/'}>
                    <Logo
                        onClick={() => setOpen(false)}
                        src={'/images/LightLogo.png'}
                    />
                </Link>
                <LinksWrapper open={open}>
                    <HeaderLink
                        onClick={() => setOpen(false)}
                        href={'/Services'}>
                        <Localized lang={'pl'}>Nasze Usługi</Localized>
                        <Localized lang={'en'}>Our Services</Localized>
                    </HeaderLink>
                    <HeaderLink
                        onClick={() => setOpen(false)}
                        href={'/CareerOpportunity'}>
                        <Localized lang={'pl'}>Kariera</Localized>
                        <Localized lang={'en'}>Career Opportunities</Localized>
                    </HeaderLink>
                    <HeaderLink
                        onClick={() => setOpen(false)}
                        href={'/Actualise'}>
                        <Localized lang={'pl'}>SAP S/4 HANA</Localized>
                        <Localized lang={'en'}>SAP S/4 HANA</Localized>
                    </HeaderLink>
                </LinksWrapper>
            </Center>
        </HeaderWrapper>
    );
};

export default Navbar;
