'use client'
import React, {useState} from 'react';
import {useForm, ValidationError} from "@formspree/react";
import styles from './contactForm.module.css'
import Done from "../Done/Done";
import Link from "next/link";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mnqelapa");
    const [agreed, setAgreed] = useState(false);

    if (state.succeeded) {
        return (
            <form className={styles.form}>
                <div className={styles.successBlock}>
                    <p>Спасибо за заявку!</p>
                    <Done width={"50px"} height={"50px"}/>
                </div>
            </form>
        );
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name" className={styles.label}>
                Ваше Имя
            </label>
            <input
                id="name"
                type="text"
                name="имя"
                className={styles.input}
                required
            />
            <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
            />
            <label htmlFor="phone" className={styles.label}>
                Номер телефона
            </label>
            <input
                id="phone"
                type="tel"
                name="phone"
                className={styles.input}
                required
            />
            <ValidationError
                prefix="phone"
                field="номер телефона"
                errors={state.errors}
            />
            <label htmlFor="message" className={styles.label}>
                Какую продукцию желаете заказать?
            </label>
            <input
                id="message"
                name="услуга"
                type={'text'}
                className={styles.input}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            <div className={styles.consentBlock}>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        id="consent-checkbox"
                        name="consent"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        required
                        className={styles.checkboxInput}
                    />
                    <span className={styles.consentText}>
                        Я согласен на обработку персональных данных в соответствии с{' '}
                        <Link
                            href="/pages/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.privacyLink}
                        >
                            Политикой конфиденциальности
                        </Link>
                    </span>
                </label>
            </div>

            <button
                type="submit"
                disabled={state.submitting || !agreed}
                className={styles.button}
                title={!agreed ? "Для отправки необходимо дать согласие на обработку персональных данных" : ""}
            >
                Отправить
            </button>
        </form>
    );
};

export default ContactForm;