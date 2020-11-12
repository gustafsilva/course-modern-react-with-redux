import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import axios from "axios";

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

function Convert({ language, text }) {
    const [translated, setTranslated] = useState('');

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language,
                    key: KEY,
                },
            });

            setTranslated(data.data.translations[0].translatedText);
        }

        const timoutId = setTimeout(() => {
            if (text) {
                doTranslation()
            }
        }, 200);

        return () => {
            clearTimeout(timoutId);
        };
    }, [language, text])


    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}

export default Convert;
