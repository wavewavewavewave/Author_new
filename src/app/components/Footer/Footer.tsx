'use client'
import React from 'react';
import styles from './footer.module.css';
import Image from "next/image";
import line from '../../assets/line.svg';
import logo from '../../assets/black_logo.svg';
import inst from '../../assets/Social_icons/instagram.svg';
import tiktok from '../../assets/Social_icons/tik-tok.svg';
import butt from '../../assets/call_me.svg';
import { inst_URL, tiktok_URL } from "../../constants/Constants";
import color_logo from '../../assets/color_logo.svg';
import white_butt from '../../assets/Social_icons/кнопка.svg';
import white_inst from '../../assets/Social_icons/кнопка instagram.svg';
import white_tiktok from '../../assets/Social_icons/кнопка тик ток.svg';
import payments from '../../assets/виды оплат.svg';
import vector from '../../assets/Vector.svg';

const Footer = ({ clientPage }: any) => {
    return (
        <div
            className={styles.container}
            style={clientPage === true ? {
                background: 'linear-gradient(to bottom, #000000 0%, #666666 100%)',
                marginTop: '0'
            } : {}}
        >
            <div className={styles.preFooterBlock}>
                <div className={styles.infoBlock} style={clientPage ? { color: 'white' } : {}}>
                    <div>Готовы</div>
                    <div>с нами</div>
                    <div>поработать?</div>
                </div>
                <a href={'/pages/contacts'} className={styles.actionPrompt}>
                    <span
                        className={styles.spanStyle}
                        style={clientPage ? { color: '#B5B5B5' } : {}}
                    >
                        Жми, чего ждешь?
                    </span>
                    <Image src={vector} alt={'Перейти в контакты'} className={styles.vectorStyle} />
                </a>
            </div>

            <div className={styles.dividerBlock}>
                <div className={styles.imageContainer}>
                    <Image src={line} alt={'Линия'} className={styles.styleLine} />
                    <div className={styles.logo}>
                        <Image
                            src={clientPage === true ? color_logo : logo}
                            alt={'Лого'}
                            className={styles.styleLogo}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.contactBlock}>
                <div className={styles.contactInfo}>
                    <div className={styles.textBlock}>
                        <a
                            href="mailto:4966866@gmail.com"
                            className={styles.textEmail}
                            style={clientPage ? { color: 'white' } : {}}
                        >
                            4966866@GMAIL.COM
                        </a>
                        <a
                            href="tel:+375444966866"
                            className={styles.textPhone}
                            style={clientPage ? { color: 'white', borderColor: 'white' } : {}}
                        >
                            +375 (44) 496-68-66
                        </a>
                    </div>
                </div>

                <div className={styles.socialGroup}>
                    <a href={inst_URL} target={'_blank'} rel="noreferrer">
                        <Image
                            src={clientPage ? white_inst : inst}
                            alt={'Инстаграм'}
                            className={styles.imageInst}
                        />
                    </a>
                    <a href={tiktok_URL} target={'_blank'} rel="noreferrer">
                        <Image
                            src={clientPage ? white_tiktok : tiktok}
                            alt={'ТикТок'}
                            className={styles.imageTikTok}
                        />
                    </a>
                </div>

                <div className={styles.buttonWrapper}>
                    <a href={'/pages/contacts'} className={styles.button}>
                        <Image
                            src={clientPage ? white_butt : butt}
                            alt={'Связаться'}
                            className={styles.styleButtonImg}
                        />
                    </a>
                </div>
            </div>

            <div className={styles.gallery}>
                <Image src={payments} alt={'Виды оплат'} className={styles.imagePayment} />
            </div>

            <div className={styles.privacyBlock}>
                <a
                    href={'/privacy'}
                    className={styles.privacyLink}
                    style={clientPage ? { color: 'rgba(255, 255, 255, 0.65)' } : { color: 'rgba(0, 0, 0, 0.55)' }}
                >
                    Политика в отношении обработки персональных данных
                </a>
            </div>
        </div>
    );
};

export default Footer;